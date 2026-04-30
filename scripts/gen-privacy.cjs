const fs = require('fs');

let html = fs.readFileSync('privacy_raw.html', 'utf-8');

// clean up html
html = html
  .replace(/<span[^>]*>/g, '')
  .replace(/<\/span>/g, '')
  .replace(/<o:p><\/o:p>/g, '')
  .replace(/style="[^"]*"/g, '')
  .replace(/class="[^"]*"/g, '')
  .replace(/<br>/g, '<br/>')
  .replace(/&nbsp;/g, ' ')
  .replace(/AT PACK/g, 'EcoPak Wholesale')
  .replace(/atpack/gi, 'ecopakwholesale');

// add h1 title
html = `<h2><b>Privacy Policy</b></h2>` + html;

// format html tags to JSX appropriate classes
html = html
  .replace(/<h2>/g, '<h2 className="text-2xl font-black text-[#1A1A1A] mt-12 mb-6">')
  .replace(/<ul>/g, '<ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">')
  .replace(/<p>/g, '<p className="text-gray-600 mb-6 leading-relaxed">')
  .replace(/<li>/g, '<li className="text-gray-600">')
  .replace(/<a /g, '<a className="text-[#82C864] hover:underline" ');

// Extract the last "How you can reach us" part to inject our contact info instead
const reachUsIndex = html.indexOf('<h2 className="text-2xl font-black text-[#1A1A1A] mt-12 mb-6"><b>How you can reach us</b></h2>');
if (reachUsIndex !== -1) {
    html = html.substring(0, reachUsIndex) + `
<h2 className="text-2xl font-black text-[#1A1A1A] mt-12 mb-6"><b>How you can reach us</b></h2>
<p className="text-gray-600 mb-6 leading-relaxed">If you would like to ask about, make a request relating to, or complain about how we process your personal information, please contact us, or mail us at one of the addresses below.</p>
<ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
  <li className="text-gray-600">Tel: +86 188 9977 1415</li>
  <li className="text-gray-600">Email: rex@ecopakwholesale.com / raymond@ecopakwholesale.com</li>
  <li className="text-gray-600">Address: Floor 4, Building 5, No 111, Qiaotou St, Qiaotou Community, Fuhai St, Baoan District, Shenzhen, China</li>
</ul>
</div></div></section>`;
} else {
    html += '</div></div></section>';
}

const componentCode = `import React, { useEffect } from 'react';
import { motion } from 'motion/react';

export default function Privacy({ setPage }: { setPage: (p: string) => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <button 
            onClick={() => setPage('home')}
            className="text-sm font-bold text-gray-500 hover:text-[#82C864] transition-colors flex items-center gap-2 mb-8"
          >
            ← Back to Home
          </button>
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-[#1A1A1A]">Privacy Policy</h1>
          <div className="h-1 w-20 bg-[#82C864] rounded-full" />
        </div>
        
        <div className="prose max-w-none prose-h2:mb-4 prose-p:mb-6 prose-li:mb-2 prose-ul:mb-6">
          ${html}
    </div>
  );
}
`;

fs.writeFileSync('src/Privacy.tsx', componentCode);

import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { coffeeMugsProducts } from './coffeeMugsData';

export const CoffeeMugs = ({ setPage }: { setPage: (p: string) => void }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
    <div className="mb-20 text-center">
      <span className="text-[#82C864] font-black text-sm tracking-[0.3em] uppercase mb-4 block">Custom Drinkware</span>
      <h1 className="text-5xl lg:text-7xl font-black mb-8 text-[#1A1A1A]">Coffee <span className="text-[#FF9F1C]">Mugs</span></h1>
      <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
        Custom Coffee Mugs for Business - Branded & Bulk Options for your cafe, restaurant or corporate gifting.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {coffeeMugsProducts.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => {
            setPage(`coffee-mugs/${product.id}`);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group cursor-pointer"
        >
          <div className="bg-gray-50 rounded-[2.5rem] p-8 aspect-[4/3] mb-6 flex justify-center items-center relative overflow-hidden shadow-lg border border-gray-100 group-hover:shadow-2xl group-hover:shadow-[#82C864]/20 transition-all duration-500">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-[80%] h-[80%] object-contain group-hover:scale-110 transition-transform duration-700" 
            />
            <div className="absolute inset-x-0 bottom-0 p-6 flex justify-between items-end opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <span className="bg-white text-[#1A1A1A] font-black px-4 py-2 rounded-full text-xs tracking-widest shadow-lg uppercase">
                View Details
              </span>
              <div className="w-10 h-10 bg-[#FF9F1C] rounded-full flex items-center justify-center text-white shadow-lg">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-black mb-3 text-[#1A1A1A] group-hover:text-[#FF9F1C] transition-colors text-center">{product.name}</h3>
        </motion.div>
      ))}
    </div>
  </div>
);

export const CoffeeMugsDetail = ({ pageId, setPage, openInquiry }: { pageId: string; setPage: (p: string) => void; openInquiry: () => void }) => {
  const item = coffeeMugsProducts.find(p => p.id === pageId);
  
  if (!item) return <div className="py-32 text-center text-2xl font-bold">Product not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      <button 
        onClick={() => setPage('coffee-mugs')}
        className="flex items-center gap-2 text-gray-500 hover:text-[#1A1A1A] font-bold mb-12 transition-colors uppercase tracking-wider text-sm"
      >
        <ChevronRight className="w-4 h-4 rotate-180" /> Back to Coffee Mugs
      </button>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="bg-gray-50 rounded-[3rem] p-12 flex justify-center items-center shadow-xl border border-gray-100 sticky top-32">
          <img src={item.image} alt={item.name} className="w-full h-auto object-contain max-h-[600px]" />
        </div>
        
        <div className="space-y-10">
          <div>
            <h1 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] mb-6">{item.name}</h1>
            <div className="space-y-6 text-lg text-gray-600 font-medium leading-relaxed">
              {item.longDescription ? item.longDescription.map((desc, i) => (
                <p key={i}>{desc}</p>
              )) : (
                <p>{item.description}</p>
              )}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button 
              onClick={openInquiry}
              className="px-10 py-5 bg-[#1A1A1A] text-white rounded-2xl font-black text-sm tracking-widest hover:bg-[#FF9F1C] transition-all shadow-xl hover:shadow-[#FF9F1C]/30 w-full md:w-auto text-center"
            >
              SEND INQUIRY
            </button>
          </div>

          {item.tableHeaders && item.tableData && (
            <div className="pt-10 border-t border-gray-100">
              <h3 className="text-2xl font-black mb-8 text-[#1A1A1A]">Specifications</h3>
              <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-sm">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-50/80">
                      {item.tableHeaders.map((header, i) => (
                        <th key={i} className="py-5 px-6 font-bold text-gray-500 uppercase tracking-wider text-xs border-b border-gray-100">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {item.tableData.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                        {row.map((cell, j) => (
                          <td key={j} className="py-5 px-6 border-b border-gray-100 font-medium text-gray-800 text-sm">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

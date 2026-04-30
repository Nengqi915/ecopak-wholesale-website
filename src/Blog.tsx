import React from 'react';
import { motion } from 'motion/react';
import { blogPosts } from './blogData';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

export const Blog = ({ setPage }: { setPage: (p: string) => void }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      <div className="mb-20 text-center">
        <span className="text-[#82C864] font-black text-sm tracking-[0.3em] uppercase mb-4 block">Insights & Updates</span>
        <h1 className="text-5xl lg:text-7xl font-black mb-8 text-[#1A1A1A]">Our <span className="text-[#FF9F1C]">Blog</span></h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
          The latest news, tips, and trends in custom coffee packaging and brand strategy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => {
              setPage(`blog/${post.id}`);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#82C864]/10 transition-all duration-300 cursor-pointer"
          >
            <div className="aspect-[16/10] overflow-hidden relative">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-[#FF9F1C] flex items-center gap-1.5 shadow-sm">
                <Tag className="w-3 h-3" />
                {post.category}
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-400 font-medium mb-4">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#FF9F1C] transition-colors line-clamp-2 leading-tight">
                {post.title}
              </h3>
              
              <p className="text-gray-500 line-clamp-3 mb-6 flex-1 text-sm leading-relaxed">
                {post.summary}
              </p>
              
              <div className="flex items-center font-bold text-[#1A1A1A] text-sm tracking-wider uppercase group-hover:text-[#82C864] transition-colors mt-auto">
                VIEW MORE
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const BlogDetail = ({ pageId, setPage, openInquiry }: { pageId: string; setPage: (p: string) => void; openInquiry: () => void }) => {
  const post = blogPosts.find(p => p.id === pageId);
  
  if (!post) return <div className="py-32 text-center text-2xl font-bold">Article not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      <button 
        onClick={() => setPage('blog')}
        className="flex items-center gap-2 text-gray-500 hover:text-[#1A1A1A] font-bold mb-12 transition-colors uppercase tracking-wider text-sm"
      >
        <ArrowRight className="w-4 h-4 rotate-180" /> Back to Blog
      </button>

      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl lg:text-5xl font-black text-[#1A1A1A] leading-tight mb-8">
          {post.title}
        </h1>
      </div>

      <div className="max-w-[1000px] mx-auto">
        <div className="text-sm text-gray-400 mb-6 font-medium">
          {post.date} 13:24:41
        </div>
        <div className="border-b border-gray-200 mb-10"></div>
        
        <div className="mb-12">
          <img src={post.image} alt={post.title} className="max-w-[600px] w-full h-auto object-cover rounded-xl shadow-lg" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start relative">
          <div className="flex-1 min-w-0 prose prose-lg prose-gray max-w-none text-gray-600 font-medium leading-relaxed
            prose-headings:font-black prose-headings:text-[#1A1A1A] 
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:mb-6 prose-p:text-[15px] prose-p:leading-[1.8]
            prose-a:text-[#FF9F1C] hover:prose-a:text-[#82C864]
            prose-strong:font-extrabold prose-strong:text-[#1A1A1A]
            prose-table:w-full prose-table:border-collapse prose-table:my-8 prose-table:text-[15px] prose-table:text-left
            prose-th:border prose-th:border-gray-200 prose-th:p-4 prose-th:bg-gray-50 prose-th:font-bold prose-th:text-[#1A1A1A]
            prose-td:border prose-td:border-gray-200 prose-td:p-4
            prose-ul:list-disc prose-ul:pl-5 prose-ul:my-6
            prose-ol:list-decimal prose-ol:pl-5 prose-ol:my-6
            prose-li:my-2"
            dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}
          />
          
          <div className="lg:w-[350px] shrink-0 lg:sticky lg:top-32">
            {post.tocHtml && (
              <div className="bg-white border border-gray-200 rounded shadow-sm text-sm p-0 overflow-hidden">
                <div className="bg-white font-bold p-4 border-b border-gray-200 flex justify-between items-center text-[#1A1A1A]">
                  Table of Contents
                  <span className="text-gray-400">▲</span>
                </div>
                <div className="p-4 prose prose-sm prose-gray max-w-none 
                  prose-ul:list-none prose-ul:pl-4 prose-ul:my-1
                  prose-li:my-1 prose-li:leading-tight
                  prose-a:text-[13px] prose-a:text-gray-500 prose-a:font-medium prose-a:no-underline hover:prose-a:text-[#FF9F1C]
                  [&>ul]:pl-0 [&>ul]:[counter-reset:toc]
                  [&_ul_ul]:[counter-reset:subtoc]
                  [&>ul>li]:[counter-increment:toc]
                  [&>ul>li>a]:before:content-[counter(toc)'.\00A0']
                  [&_ul_ul>li]:[counter-increment:subtoc]
                  [&_ul_ul>li>a]:before:content-[counter(toc)'.'counter(subtoc)'.\00A0']" 
                  dangerouslySetInnerHTML={{ __html: post.tocHtml }} 
                />
              </div>
            )}
          </div>
        </div>

        <div className="pt-16 mt-16 border-t border-gray-100 flex flex-col items-center text-center">
          <h3 className="text-2xl font-black text-[#1A1A1A] mb-4">Ready to elevate your packaging?</h3>
          <p className="text-gray-500 mb-8 max-w-lg">Get in touch with our experts to discuss how we can bring your brand's vision to life.</p>
          <button 
            onClick={openInquiry}
            className="px-10 py-4 bg-[#82C864] text-white rounded-2xl font-black text-sm tracking-widest hover:bg-[#1A1A1A] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            START YOUR PROJECT
          </button>
        </div>
      </div>
    </div>
  );
};

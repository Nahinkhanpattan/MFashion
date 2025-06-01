import React from 'react';

const blogPosts = [
  { date: '16 February 2020', title: 'What Curling Irons Are The Best Ones', image: 'img/blog/blog-1.jpg' },
  { date: '21 February 2020', title: 'Eternity Bands Do Last Forever', image: 'img/blog/blog-2.jpg' },
  { date: '28 February 2020', title: 'The Health Benefits Of Sunglasses', image: 'img/blog/blog-3.jpg' },
  { date: '16 February 2020', title: 'Aiming For Higher The Mastopexy', image: 'img/blog/blog-4.jpg' },
  { date: '21 February 2020', title: 'Wedding Rings A Gift For A Lifetime', image: 'img/blog/blog-5.jpg' },
  { date: '28 February 2020', title: 'The Different Methods Of Hair Removal', image: 'img/blog/blog-6.jpg' },
  { date: '16 February 2020', title: 'Hoop Earrings A Style From History', image: 'img/blog/blog-7.jpg' },
  { date: '21 February 2020', title: 'Lasik Eye Surgery Are You Ready', image: 'img/blog/blog-8.jpg' },
  { date: '28 February 2020', title: 'Lasik Eye Surgery Are You Ready', image: 'img/blog/blog-9.jpg' }
];

const Blog = () => {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <section className="bg-cover bg-center bg-no-repeat py-20 text-center" style={{ backgroundImage: 'url(img/breadcrumb-bg.jpg)' }}>
        <h2 className="text-4xl font-bold text-gray-800">Our Blog</h2>
      </section>

      {/* Blog Listing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {blogPosts.map((post, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-[45px]">
                <div>
                  <div
                    className="h-[270px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${post.image})` }}
                  ></div>
                  <div className="bg-white px-[30px] pt-[30px] pb-[25px] mt-[-35px]">
                    <span className="flex items-center text-sm text-[#b7b7b7] mb-[10px]">
                      <img src="img/icon/calendar.png" alt="calendar" className="w-4 h-4 mr-2" />
                      {post.date}
                    </span>
                    <h5 className="text-[#0d0d0d] font-bold leading-[28px] mb-[10px]">{post.title}</h5>
                    <a
                      href="#"
                      className="text-[13px] font-bold uppercase tracking-[4px] text-[#111111] relative inline-block group"
                    >
                      Read More
                      <span className="block w-0 h-[2px] bg-[#111111] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
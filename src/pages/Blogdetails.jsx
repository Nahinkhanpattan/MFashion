import React from 'react';
import { Form } from 'react-bootstrap';

const Blogdetails = () => {
  return (
    <div className="bg-white">
      {/* Blog Hero Section */}
      <section className="bg-gray-100 py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#111111]">
              Are you one of the thousands of iPhone owners who has no idea
            </h2>
            <ul className="flex justify-center space-x-4 text-[#b7b7b7] text-sm">
              <li>By Deercreative</li>
              <li>February 21, 2019</li>
              <li>8 Comments</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Blog Details Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <img
              src="img/blog/details/blog-details.jpg"
              alt="Blog Detail"
              className="w-full max-w-6xl rounded mb-10"
            />
            <div className="w-full max-w-3xl">
              <div className="mb-10 text-[#111111]">
                <p className="mb-6 text-[#111111]">
                  Hydroderm is the highly desired anti-aging cream on the block. This serum restricts the
                  occurrence of early aging signs on the skin and keeps the skin younger, tighter and healthier. It
                  reduces the wrinkles and loosening of skin. This cream nourishes the skin and brings back the glow
                  that had lost in the run of hectic years.
                </p>
                <p className="mb-6 text-[#111111]">
                  The most essential ingredient that makes Hydroderm so effective is Vyo-Serum, which is a product of
                  natural selected proteins. This concentrate works actively in bringing about the natural youthful
                  glow of the skin. It tightens the skin along with its moisturizing effect on the skin. The other
                  important ingredient, making Hydroderm so effective is "marine collagen" which along with
                  Vyo-Serum helps revitalize the skin.
                </p>
              </div>

              <blockquote className="border-l-4 border-[#e53637] pl-4 italic text-[#111111] mb-10">
                “When designing an advertisement for a particular product many things should be researched like
                where it should be displayed.”
                <footer className="text-sm font-bold mt-2">_ John Smith _</footer>
              </blockquote>

              <div className="mb-10 text-[#111111]">
                <p className="mb-6">
                  Vyo-Serum along with tightening the skin also reduces the fine lines indicating aging of skin.
                  Problems like dark circles, puffiness, and crow’s feet can be controlled from the strong effects of
                  this serum.
                </p>
                <p>
                  Hydroderm is a multi-functional product that helps in reducing the cellulite and giving the body a
                  toned shape, also helps in cleansing the skin from the root and not letting the pores clog,
                  nevertheless also lets sweeps out the wrinkles and all signs of aging from the sensitive area near
                  the eyes.
                </p>
              </div>

              <div className="flex flex-wrap justify-between items-center mb-10">
                <div className="flex items-center space-x-4">
                  <img
                    src="img/blog/details/blog-author.jpg"
                    alt="Author"
                    className="w-12 h-12 rounded-full"
                  />
                  <h5 className="font-semibold text-[#111111]">Aiden Blair</h5>
                </div>
                <div className="space-x-2">
                  <span className="text-sm text-[#b7b7b7]">#Fashion</span>
                  <span className="text-sm text-[#b7b7b7]">#Trending</span>
                  <span className="text-sm text-[#b7b7b7]">#2020</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-between mb-10">
                <div>
                  <a href="#" className="block mb-1 text-[#111111] hover:underline">
                    &larr; Previous Post
                  </a>
                  <h5 className="font-semibold text-base">It S Classified How To Utilize Free Classified Ad Sites</h5>
                </div>
                <div className="text-right">
                  <a href="#" className="block mb-1 text-[#111111] hover:underline">
                    Next Post &rarr;
                  </a>
                  <h5 className="font-semibold text-base">Tips For Choosing The Perfect Gloss For Your Lips</h5>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-6 text-[#111111]">Leave A Comment</h4>
                <form className="space-y-4">
                  <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/3 px-2">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full border border-gray-300 px-4 py-2 rounded"
                      />
                    </div>
                    <div className="w-full md:w-1/3 px-2">
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full border border-gray-300 px-4 py-2 rounded"
                      />
                    </div>
                    <div className="w-full md:w-1/3 px-2">
                      <input
                        type="text"
                        placeholder="Phone"
                        className="w-full border border-gray-300 px-4 py-2 rounded"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <textarea
                      rows="4"
                      placeholder="Comment"
                      className="w-full border border-gray-300 px-4 py-2 rounded"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#111111] text-white uppercase font-semibold py-2 px-6 rounded hover:bg-[#e53637]"
                  >
                    Post Comment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogdetails;

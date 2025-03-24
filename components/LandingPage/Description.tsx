import React from 'react';

const AnimeDescription = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-6 lg:px-20">
      <div>
        <h1 className="text-3xl font-bold mb-6">
          AniFlix - The Best Site to Watch Anime Online for Free
        </h1>
        <p className="text-gray-300 mb-4">
          Did you know that Google reports over 1 billion monthly searches related to anime? Anime has become a global sensation, and as a result, the number of free anime streaming sites has skyrocketed.
        </p>
        <p className="text-gray-300 mb-6">
          Similar to free online movie streaming sites, anime streaming platforms vary in quality. We've created AniFlix to stand out as one of the best free streaming sites for anime lovers worldwide.
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">1/ What is AniFlix?</h2>
            <p className="text-gray-300">
              AniFlix is a free platform where you can watch and download subbed or dubbed anime in ultra HD quality with no need for registration or payment. We keep ads to a minimum, with only one ad displayed to cover server costs, ensuring it’s the safest platform for free anime.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2/ Is AniFlix Safe?</h2>
            <p className="text-gray-300">
              Yes, AniFlix is safe. We only display a single ad to cover server costs, and we scan the ads 24/7 for potential risks. If you spot any suspicious ads, please report them, and we'll promptly remove them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              3/ What Makes AniFlix the Best Site to Watch Anime for Free?
            </h2>
            <ul className="list-disc list-inside space-y-3">
              <li className="text-gray-300">
                <strong>Safety:</strong> We prioritize a safe environment by ensuring all ads are clean and secure.
              </li>
              <li className="text-gray-300">
                <strong>Content Library:</strong> AniFlix offers a vast collection of anime across all genres, including action, drama, fantasy, horror, romance, and more. All content comes with English subtitles or is dubbed in multiple languages.
              </li>
              <li className="text-gray-300">
                <strong>Quality/Resolution:</strong> We offer anime in the best possible resolution, including 360p, 720p, and 1080p. You can adjust the quality depending on your internet speed for a smooth experience.
              </li>
              <li className="text-gray-300">
                <strong>Streaming Experience:</strong> AniFlix provides faster loading times compared to other streaming sites. Downloads are as easy as streaming, allowing you to enjoy anime offline.
              </li>
              <li className="text-gray-300">
                <strong>Regular Updates:</strong> We update our library daily, adding new titles and fulfilling requests. You'll always have something fresh to watch.
              </li>
              <li className="text-gray-300">
                <strong>User Interface:</strong> Our clean and intuitive UI/UX ensures that users of all ages can easily navigate the site.
              </li>
              <li className="text-gray-300">
                <strong>Device Compatibility:</strong> AniFlix works seamlessly on both mobile and desktop. However, for the best streaming experience, we recommend using a desktop.
              </li>
              <li className="text-gray-300">
                <strong>Customer Support:</strong> Our support team is available 24/7. Feel free to reach out for any assistance or inquiries.
              </li>
            </ul>
          </section>
        </div>

        <p className="text-gray-300 mt-6">
          Looking for a trustworthy and safe platform to watch anime? Give AniFlix a try! If you enjoy our service, don't forget to spread the word and bookmark our site. Thank you!
        </p>

        <p className="text-gray-500 text-sm mt-6">© AniFlix. All rights reserved.</p>
      </div>
    </div>
  );
};

export default AnimeDescription;

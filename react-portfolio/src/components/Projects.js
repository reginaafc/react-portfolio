
import "../assets/css/Projects.css";

function Projects() {
  return (
    <section>
      <div className="card m-16 shadow-sm">
        <img
          className="card-img-top"
          src="https://www.thespruce.com/thmb/YPjbjXExku3d_pmVrVrlgnJEwPY=/4543x2555/smart/filters:no_upscale()/how-to-sell-used-books-for-the-most-cash-1388970-01-7815a93d4c95431999e1b5192ece1699.jpg"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">Amusectionary</h5>
          <p className="card-text">
            A website created for english learners. With only 5 minutes a day,
            you can increase your vocabulary in a fun way, all you have to do is
            enter a word in the search engine and Amusectionary will present you
            the definition and pronunciation as well as a song with its lyrics
            so that the user can see the usage of the word. If that weren't
            enough, a starred screen is also presented so that the user can save
            the words and see its information again by only clicking at it.
          </p>
          <a
            href="https://reginaafc.github.io/amusectionary/"
            className="bg-red-700 p-2 shadow-sm rounded-lg text-white"
          >
            Visit website
          </a>
        </div>
      </div>

      <div className="card m-16 shadow-sm">
        <img
          className="card-img-top"
          src="https://www-cdn.eumetsat.int/files/styles/16_9_large/s3/2020-06/ASpot_Weather.jpg?h=d1cb525d&itok=lvYWh_W8"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">Weather Dashboard</h5>
          <p className="card-text">
            A website created with the purpose of allowing you to see the
            weather from all cities around the world. You won't have to worry
            anymore about packing the wrong clothes.
          </p>
          <a
            href="https://reginaafc.github.io/weather-dashboard/Main/index.html"
            className="bg-red-700 p-2 shadow-sm rounded-lg text-white"
          >
            Visit website
          </a>
        </div>
      </div>

      <div className="card m-16 shadow-sm">
        <img
          className="card-img-top"
          src="https://humanebroward.com/wp-content/uploads/2017/04/lost-pet-1.jpg"
          alt="C"
        />
        <div className="card-body">
          <h5 className="card-title">Pawbook</h5>
          <p className="card-text">
            Regardless of laws against animal abuse in México, Mexico ranks
            first in animals that have been abandoned to live in the streets,
            condemned to despair, suffering and hunger. Most of these animals
            came to the streets due to carelessness and negligence. Many
            unsterilized pups are abandoned. If they survive, in many cases they
            reproduce, giving birth to another generation of puppies relegated
            to living abroad. With this in mind, we decided to create Pawbook,
            to help this animals find a home.
          </p>
          <a
            href="https://stormy-savannah-69028.herokuapp.com/login"
            className="bg-red-700 p-2 shadow-sm rounded-lg text-white"
          >
            Visit website
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;

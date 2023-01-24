import heroLogo from "../assets/images/illustration-hero.svg";
const ProductSummaryCard = () => {
  return (
    <div className="md:w-[450px] md:h-[700px] w-[350px]  bg-white border rounded-lg border-transparent sm:shadow-2xl md:shadow-none">
      <div className="flex justify-center m-0 w-full">
        <img
          src={heroLogo}
          alt="Hero"
          className="w-full rounded-t-lg border border-transparent object-cover"
        />
      </div>
      <div id="main-wrapper mt-[40px] mx-[45px] ">
        <div className="text-center">
          <p className="text-redHatDisplay text-2xl md:mt-10 sm:mt-5 text-darkBlue font-bold">
            Order Summary
          </p>
        </div>

        <div className="mx-[55px] text-center">
          <p className="text-redHatDisplay text-md text-gray-500 mt-4">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
        </div>
        <div
          id="wrapper-flex-box-div"
          className="md:w-full sm:w-[300px] flex flex-row justify-center mt-[23px] mx-auto"
        >
          <div className="flex justify-between  border rounded-lg  bg-veryPaleBlue p-2 w-[350px]">
            <div className="flex flex-row justify-center items-center ml-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                className="m-2"
              >
                <g fill="none" fill-rule="evenodd">
                  <circle cx="24" cy="24" r="24" fill="#DFE6FB" />
                  <path
                    fill="#717FA6"
                    fill-rule="nonzero"
                    d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"
                  />
                </g>
              </svg>
              <div className="flex flex-col">
                <p className="text-sm font-bold text-darkBlue">Annual Plan</p>
                <p className="text-sm  text-gray-500">$59.99/year</p>
              </div>
            </div>
            <div
              id="wrapper-change"
              className="flex flex-col justify-center items-center"
            >
              <a
                className="text-sm text-brightBlue underline mr-[20px] hover:text-desaturatedBlue"
                href="!#"
              >
                Change
              </a>
            </div>
          </div>
        </div>
        <div
          id="wrapper-button-proceed"
          className="flex flex-row justify-center md:mt-9 sm:mt-4 mx-[45px]"
        >
          <button
            className="bg-brightBlue border border-transparent rounded-lg text-white text-md font-redHatDisplay p-2.5 shadow-2xl w-full
                        hover:bg-desaturatedBlue"
          >
            Proceed to Payment
          </button>
        </div>
        <div
          id="wrapper-button-proceed"
          className="flex flex-row justify-center md:mt-4 sm:mt-2 mx-[45px]"
        >
          <button
            className="border border-transparent rounded-lg text-gray-500 text-md font-redHatDisplay p-2.5 w-full
                        hover:text-darkBlue"
          >
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSummaryCard;

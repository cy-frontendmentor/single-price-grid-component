const page = () => {
  return (
    <div className=" max-w-[635px] rounded-lg px-8 drop-shadow-[0_15px_30px_rgba(0,81,171,0.1488)]">
      <div className="grid">
        <div className="bg-white px-6 pt-7 pb-8">
          <h1 className=" mb-6 text-xl font-bold -tracking-[0.25px] text-cyan">
            Join our community
          </h1>
          <p className=" mb-4 text-[15px] font-bold leading-5 -tracking-[0.19px] text-yellow-bright">
            30-day, hassle-free money back guarantee
          </p>
          <p className=" text-sm leading-[26px] -tracking-[0.17px] text-blue-grayish">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>
        <div className="gird bg-cyan">
          <div className=" p-6">
            <h2 className=" mb-[18px] text-lg font-bold -tracking-[0.22px] text-white">
              Monthly Subscription
            </h2>
            <p className=" mb-1 text-[32px] font-bold leading-normal -tracking-[0.4px] text-white">
              $29
              <span className=" text-base font-normal leading-[26px] -tracking-[0.2px] opacity-50">
                per month
              </span>
            </p>
            <p className=" mb-[26px] text-base  leading-[26px] -tracking-[0.2px] text-white">
              Full access for less than $1 a day
            </p>
            <button className=" w-full rounded-[5px] bg-yellow-bright py-[14px] text-base  text-white drop-shadow-[0_15px_30px_rgba(0,0,0,0.0973)] ">
              Sign Up
            </button>
          </div>
          <div className="bg-white bg-opacity-[15.19%] p-6">
            <h2 className=" text-lg font-bold -tracking-[0.22px] text-white">
              Why Us
            </h2>
            <p className=" text-[14px] leading-5 -tracking-[0.17px] text-white opacity-75">
              Tutorials by industry experts<br></br> Peer &amp; expert code
              review
              <br></br>
              Coding exercises <br></br> Access to our GitHub repos Community
              forum<br></br>
              Flashcard decks<br></br> New videos every week<br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

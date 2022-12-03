import React from 'react';

export const Home = () => {
  return (
    <main>
      <h3>Welcome to our real-time Grand Exchange pricing site.</h3>
      <p>
        {`Here, we leverage the power of our `}
        <a
          href="https://oldschool.runescape.wiki/w/RuneScape:Real-time_Prices"
          rel="noopener noreferrer"
        >
          real-time price API
        </a>
        {` to provide you with easy to view pricing information about items in Old
        School Runescape.`}
      </p>
      <div className="card">
        <div className="card-header">Quick tips</div>
        <div className="card-body">
          <ul>
            <li>
              You can favourite specific items, so that they appear on your
              Favourites page. This allows you to have an easy track list of
              items you care about the most.
            </li>
            <li>
              Tables can be sorted by clicking the column headers, or filtered
              by clicking 'Apply Filters'. Try it out on our All Items page.
            </li>
            <li>
              {`To ensure you have the most fresh data, turn on 'Auto-refresh' on
              the right side of the header (or under the hamburger menu on
              smaller screens).`}
            </li>
          </ul>
        </div>
        <div className="card">
          <div className="card-header">Items with highest daily volume</div>
          <div className="card-body"></div>
        </div>
        <div className="card">
          <div className="card-header">Most expensive items</div>
          <div className="card-body"></div>
        </div>
      </div>
    </main>
  );
};

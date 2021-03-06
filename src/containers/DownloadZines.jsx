import React from "react";

import "./DownloadZines.css";

export default () => {
  return (
    <div>
      <h2 className="tc">Download the Zine!</h2>
      <div className="downloadzines-container">
        <a
          title="Download the Zine! (Waluigi cover by @pioldes)"
          href="https://gameworkers.github.io/zine-gdc-2019/pdfs/gwuzine2019waluigi.pdf"
        >
          <img
            className="downloadzines-cover"
            src="/images/cover_thumb_waluigi.jpg"
          />
        </a>
        <a
          title="Download the Zine! (Isabelle cover)"
          href="https://gameworkers.github.io/zine-gdc-2019/pdfs/gwuzine2019isabelleisabelle.pdf"
        >
          <img
            className="downloadzines-cover"
            src="/images/cover_thumb_isabelle.jpg"
          />
        </a>
        <a
          title="Download the Zine! (Unionize! cover)"
          href="https://gameworkers.github.io/zine-gdc-2019/pdfs/gwuzine2019unionize.pdf"
        >
          <img
            className="downloadzines-cover"
            src="/images/cover_thumb_unionize.jpg"
          />
        </a>
        <a
          title="Download the Zine! (Egg cover by @mushbuh)"
          href="https://gameworkers.github.io/zine-gdc-2019/pdfs/gwuzine2019egg.pdf"
        >
          <img
            className="downloadzines-cover"
            src="/images/cover_thumb_egg.jpg"
          />
        </a>
      </div>
      <h3 className="tc">
        Choose from the four cover variants!
        <br />
        Print and share with your coworkers and friends!
      </h3>
      <p className="tc downloadzines-notes">
        <div>
          <a href="/endnotes">References page</a>
        </div>
        <div>
          <a href="/how-to-print">Printing hints</a>
        </div>
        <div>
          <a href="https://gameworkersunite.org">
            Game Workers Unite International
          </a>
        </div>
      </p>
    </div>
  );
};

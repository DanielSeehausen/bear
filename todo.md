Game Wrapper
  (1) Line 220 (directly above flagBuy())
        // TODO can combine into a trade(action) function and pass one

  (2) Line 250 --> (under the handleKeyDown(e))
      // TODO: implement early end game

----------------------
gameStyle.css

(1)  What is
      #bullshit-link {
        width: 80%;
      }
      //Changed to random-link

---------------------------
style.css

  (1) Line 31 --> (above .slow-fadeable)
      /* TODO: while this works, it is also overriding the 250ms splash screen fade out plan. Make separate keyframe animation for on hover for the bio-img elements.

  (2) Why is .splash-main-window {} empty?

----------------
bio.component

  (1) Line 10 --> (above render())
      //TODO: on hover mini splashes for each bio populates and they should be components of their own

-------------------
home component

  (1) Line 71 --> (above toggleMainMenu())
      //TODO can clean these up with a bind argument as well?

  (2) Line 83 --> (above render())
      //TODO these splashes can be combined into one type of component

----------
stockDataController.js

  (1) Line 10 --> (under setStockData: (stock))
      // TODO move to store?

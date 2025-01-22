import {ReactComponent as MemorySVG} from "../../assets/images/icon-memory.svg"
import {ReactComponent as ReactionSVG} from "../../assets/images/icon-reaction.svg"
import {ReactComponent as VerbalSVG} from "../../assets/images/icon-verbal.svg"
import { ReactComponent as VisualSVG } from "../../assets/images/icon-visual.svg";

import * as SC from "./SummaryStyled"

const Summary = () => {
    return (
      <SC.SummaryCon>
        <h3>Summary</h3>
        <SC.SummaryList>
          <SC.ListItem content="red">
            <div>
              <ReactionSVG />
              <h4>Reaction</h4>
            </div>
            <p>
              80 <span>/ 100</span>
            </p>
          </SC.ListItem>
          <SC.ListItem content="yellow">
            <div>
              <MemorySVG />
              <h4>Memory</h4>
            </div>
            <p>
              92 <span>/ 100</span>
            </p>
          </SC.ListItem>
          <SC.ListItem content="green">
            <div>
              <VerbalSVG />
              <h4>Verbal</h4>
            </div>
            <p>
              61 <span>/ 100</span>
            </p>
          </SC.ListItem>
          <SC.ListItem content="blue">
            <div>
              <VisualSVG />
              <h4>Visual</h4>
            </div>
            <p>
              73 <span>/ 100</span>
            </p>
          </SC.ListItem>
        </SC.SummaryList>
        <SC.Button>Continue</SC.Button>
      </SC.SummaryCon>
    );
}
 
export default Summary;
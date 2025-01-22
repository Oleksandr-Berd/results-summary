import * as SC from "./ResultsStyled"

const Results = () => {
    return (
      <SC.ResultsCon>
        <h3>Your Result</h3>
        <SC.Circle>
          <h4>76</h4>
          <p>of 100</p>
        </SC.Circle>
        <h5>Great</h5>
        <p>
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </SC.ResultsCon>
    );
}
 
export default Results;
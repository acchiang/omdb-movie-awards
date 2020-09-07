import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

function Nominations(props) {
  const { nominationData, setNominationData } = props;
  const NomCard = ({ Title, Year }) => {
    return (
      <div>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {Title}, {Year}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Remove</Button>
          </CardActions>
        </Card>
      </div>
    );
  };

  const nomCards = (
    <div id="nominationCards">
      {nominationData.map((nom, i) => {
        console.log("Entered");
        // Return the element. Also pass key
        return <NomCard Title={nom.Title} Year={nom.Year} />;
      })}
    </div>
  );
  console.log(nomCards);

  return nomCards;
}

export default Nominations;

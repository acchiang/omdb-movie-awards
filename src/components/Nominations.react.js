import React, { useMemo } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  cardContainer: {
    paddingLeft: 20,
    paddingBottom: 20,
  },
  submissionButton: {
    paddingLeft: 20,
    paddingBottom: 30,
  },
});
function Nominations(props) {
  const { nominationData, setNominationData } = props;
  const classes = useStyles();
  const NomCard = ({ Title, Year }) => {
    return (
      <div className={classes.cardContainer}>
        <Card>
          <CardContent>
            <Typography color="textSecondary">
              {Title}, {Year}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              onClick={() => {
                setNominationData(
                  nominationData.filter(function (nom) {
                    return nom.Title !== Title;
                  })
                );
              }}
            >
              Remove
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  };

  const nomCards = useMemo(() => {
    return (
      <div id="nominationCards">
        {nominationData.map((nom, i) => {
          return <NomCard Title={nom.Title} Year={nom.Year} />;
        })}
      </div>
    );
  }, [nominationData]);

  return (
    <div>
      <div className={classes.submissionButton}>
        <Button
          variant="contained"
          color="primary"
          disabled={nominationData.length < 5}
          onClick={() => {
            setNominationData([]);
            window.alert("Thank you for submitting your nominations!");
          }}
        >
          Submit your 5 nominations!
        </Button>
      </div>
      {nomCards}
    </div>
  );
}

export default Nominations;

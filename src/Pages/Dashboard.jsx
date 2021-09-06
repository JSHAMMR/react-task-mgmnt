import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Link } from "react-router-dom";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../images/person.png";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import EnhancedTable from "../Components/EnhancedTable";
import makeData from "../makeData";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
} from "react-vis";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    "& .MuiPaper-root": {
      boxShadow: "rgba(0,0,0,0.1);",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Dashboard() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );

  const [data, setData] = React.useState(React.useMemo(() => makeData(20), []));
  const [skipPageReset, setSkipPageReset] = React.useState(false);

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true);
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  React.useEffect(() => {
    if (!isAuthenticated) {
      // history.push('/login');
    }
  }, [isAuthenticated, history]);
  const classes = useStyles();

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <ReactRoundedImage image={MyPhoto} imageWidth="48" imageHeight="48" />
          <div style={{ marginLeft: "0.8rem" }}>
            <Link className="navbar-brand" to={"/sign-in"}>
              Ali
            </Link>
          </div>
        </div>
      </nav>
      <div className="inner1">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <div className="title">Tasks Completed</div>
                <div className="task">
                  5<span className="totaltask">/ 20</span>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <div className="title">Latest Created Tasks</div>
                <ul>
                  <li>Clean the room </li>
                  <li>Buy some vegetables, chicken & ...</li>
                  <li>Reinstall windows on PC</li>
                </ul>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}></Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <div>
                  <CssBaseline />
                  <EnhancedTable
                    columns={columns}
                    data={data}
                    setData={setData}
                    updateMyData={updateMyData}
                    skipPageReset={skipPageReset}
                  />
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

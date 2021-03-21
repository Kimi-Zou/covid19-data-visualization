import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { getToday, getYesterday, getTwoDaysAgo } from '../../store/all';

// Visualization
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries
} from '@devexpress/dx-react-chart-material-ui';

const All = () => {
  const dispatch = useDispatch();
  const today = useSelector(state => state.all.today);
  const yesterday = useSelector(state => state.all.yesterday);
  const twoDaysAgo = useSelector(state => state.all.twoDaysAgo);
  const [loaded, setLoaded] = useState(false);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    (async () => {
      await dispatch(getToday());
      await dispatch(getYesterday());
      await dispatch(getTwoDaysAgo());
      setLoaded(true);
    })();
  }, [dispatch]);

  useEffect(() => {
    if (today && yesterday && twoDaysAgo) {
      setChartData([
        { argument: moment(twoDaysAgo.updated - 86400000 * 2).format('dddd, MMMM Do YYYY'), value: twoDaysAgo.todayCases },
        { argument: moment(yesterday.updated - 86400000).format('dddd, MMMM Do YYYY'), value: yesterday.todayCases },
        { argument: moment(today.updated).format('dddd, MMMM Do YYYY'), value: today.todayCases }
      ]);
    }
  }, [today, yesterday, twoDaysAgo]);

  if (!loaded) return null;

  return (
    <>
      <div>Total Coronavirus Cases in One Day</div>
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis />
          <LineSeries valueField='value' argumentField='argument' />
        </Chart>
      </Paper>
    </>
  );
};

export default All;

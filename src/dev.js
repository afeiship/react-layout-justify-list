import './dev.scss';
import ReactLayoutJustifyList from './main';

/*===example start===*/
class App extends React.Component {
  render() {
    return (
      <div className="hello-react-layout-justify-list" >
        <ReactLayoutJustifyList
          className="auto"
          style={{ border:'1px solid #f80'}}
          width="800px" itemWidth="240px"
          count={3}>
          <div className="test1">123</div>
          <div className="test1">1244</div>
          <div className="test1">1244</div>
          <div className="test1">1244</div>
          <div className="test1">1244</div>
          <div className="test1">1244</div>
          <div style={{border:'2px solid #090'}} className="test1">1244</div>
        </ReactLayoutJustifyList>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

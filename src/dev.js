import './dev.scss';
import ReactLayoutJustifyList from './main';

/*===example start===*/
class App extends React.Component {
  render() {
    return (
      <div className="hello-react-layout-justify-list">
        <ReactLayoutJustifyList width="360" count={3} unit="px" childSize={{ width:110,height:80}}>
          <div style={{border:'2px solid #f00'}} className="test1">123</div>
          <div className="test1">1244</div>
          <div className="test1">1244</div>
          <div className="test1">1244</div>
          <div className="test1">1244</div>
          <div className="test1">1244</div>
          <div className="test1">1244</div>
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

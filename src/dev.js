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
          width="800px"
          itemWidth="240px"
          count={3}>
          {
            [1,2,3,4,5,6,7,8,9,10,11].map(item=>{
              return (
                <div key={item} className="test1">123</div>
              )
            })
          }
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

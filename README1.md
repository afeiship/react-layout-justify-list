# react-layout-justify-list
> React component for justify list layout.


## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    itemWidth: PropTypes.string,
    count: PropTypes.number,
  };

  static defaultProps = {};
  
```

## usage:
```jsx
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

```



## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install


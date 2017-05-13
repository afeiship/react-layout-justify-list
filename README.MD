# react-layout-justify-list
> React component for justify list layout.


## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    item: PropTypes.object,
    count: PropTypes.number,
    unit: PropTypes.string
  };

  static defaultProps = {};
  
```

## usage:
```jsx
class App extends React.Component {
  render() {
    return (
      <div className="hello-react-layout-justify-list">
        <ReactLayoutJustifyList width="360" count={3} unit="px" item={{ width:110,height:80}}>
          <div className="test1">123</div>
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

```



## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install


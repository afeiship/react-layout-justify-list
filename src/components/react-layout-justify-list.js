import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import objectAssign from 'object-assign';

const VALUE_UNIT = /([0-9.]+)([a-z]+)/;
const DEFAULT_VALUE = [, 0, 'px' ];

export default class ReactLayoutJustifyList extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    itemWidth: PropTypes.string,
    count: PropTypes.number,
  };

  static defaultProps = {};
  /*===properties end===*/

  static parseValue(inValue){
    return inValue.match(VALUE_UNIT) || DEFAULT_VALUE;
  }

  get gap(){
    const { width, count, itemWidth, children } = this.props;
    const wrapperData = ReactLayoutJustifyList.parseValue(width);
    const [ _, wrapperWidth, unit ] = wrapperData;
    return ( parseFloat(wrapperWidth) -  parseFloat( itemWidth ) * count ) / ( count -1 ) + unit;
  }

  get children() {
    const { children } = this.props;

    return React.Children.map(children, (elem, index) => {
      const {style, ...props}  = elem.props;
      return React.cloneElement(elem, {
        className: 'react-layout-justify-list-item',
        style: objectAssign({
          marginRight: `${this.gap}`,
        }, style)
      }, ...props)
    });
  }

  render(){
    //( $wrap-width - $item-width * $count )/ ($count - 1)
    const { width, count, itemWidth, className, style, ...props } = this.props;
    return (
      <section {...props}
        data-count={count}
        className={ classNames('react-layout-justify-list', className)}
        style={ objectAssign({ width: width }, style ) }>
        <div className="react-layout-justify-list-container" style={{ marginRight:`-${this.gap}`}}>
          { this.children }
        </div>
      </section>
    )
  }
}

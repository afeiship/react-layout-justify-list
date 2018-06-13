import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import objectAssign from 'object-assign';
import toUnitValue from 'next-to-unit-value';

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

  get gap(){
    const { width, count, itemWidth, children } = this.props;
    const wrapperData = toUnitValue(width);
    const [ _, wrapperWidth, unit ] = wrapperData;
    const _gap = ( parseFloat(wrapperWidth) -  parseFloat( itemWidth ) * count ) / ( count -1 );
    return _gap.toFixed(2) + unit;
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
      }, ...props);
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
        <div className="clearfix react-layout-justify-list-container" style={{ marginRight:`-${this.gap}`}}>
          { this.children }
        </div>
      </section>
    )
  }
}

import './style.scss';

import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class extends PureComponent {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    childSize: PropTypes.object,
    count: PropTypes.number,
    unit: PropTypes.string
  };

  static defaultProps = {};
  /*===properties end===*/

  get children() {
    const {children, width, count, childSize, unit} = this.props;
    const gap = (width - childSize.width * count) / (count - 1);
    return React.Children.map(children, (elem, index) => {
      const {style, ...props}  = elem.props;
      return React.cloneElement(elem, {
        className: 'react-layout-justify-item',
        style: objectAssign({
          marginRight: `${gap}${unit}`,
          width: `${childSize.width}${unit}`,
          height: `${childSize.height}${unit}`,
        }, style)
      }, ...props)
    });
  }

  render() {
    const {children, className, width, childSize, unit, count, ...props} = this.props;
    return (
      <div {...props} style={{width: `${width}${unit}`}} data-rows={count}
           className={classNames('react-layout-justify-list', className)}>
        {this.children}
      </div>
    );
  }
}

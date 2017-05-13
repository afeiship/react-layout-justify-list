import './style.scss';

import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends PureComponent {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    item: PropTypes.object,
    count: PropTypes.number,
    unit: PropTypes.string
  };

  static defaultProps = {};
  /*===properties end===*/

  get children() {
    const {children, width, count, item, unit} = this.props;
    const gap = (width - item.width * count) / (count - 1);
    console.log(gap);
    return React.Children.map(children,(elem, index) => {
      return React.cloneElement(elem, {
        className:'react-layout-justify-item',
        style: {
          marginRight: `${gap}${unit}`,
          width: `${item.width}${unit}`,
          height: `${item.height}${unit}`,
        }
      })
    });
  }

  render() {
    const {children, className, width, item,unit,count, ...props} = this.props;
    return (
      <div {...props} style={{width: `${width}${unit}`}} data-rows={count}
           className={classNames('react-layout-justify-list', className)}>
        {this.children}
      </div>
    );
  }
}

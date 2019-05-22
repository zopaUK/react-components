import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Link from './SidebarLink';
import Styled from 'rsg-components/Styled';

const styles = ({ color, fontFamily, fontSize, space, mq }) => ({
  list: {
    margin: 0,
    paddingLeft: '8px',
  },
  item: {
    color: color.base,
    display: 'block',
    margin: [[space[1], 0, space[1], 0]],
    fontFamily: fontFamily.base,
    fontSize: fontSize.base,
    listStyle: 'none',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  isChild: {
    [mq.small]: {
      display: 'inline-block',
      margin: [[0, space[1], 0, 0]],
    },
  },
  heading: {
    color: color.base,
    marginTop: space[1],
    fontFamily: fontFamily.base,
  },
});

export function ComponentsListRenderer({ classes, items }) {
  items = items.filter(item => item.name);

  if (!items.length) {
    return null;
  }
  return (
    <ul className={classes.list}>
      {items.map(({ heading, name, href, content }) => {
        return (
          <li className={cx(classes.item, (!content || !content.props.items.length) && classes.isChild)} key={href}>
            <Link className={cx(heading && classes.heading)} href={href}>
              {heading ? <span style={{ opacity: 0.5 }}>{name}</span> : name}
            </Link>
            {content}
          </li>
        );
      })}
    </ul>
  );
}

ComponentsListRenderer.propTypes = {
  items: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default Styled(styles)(ComponentsListRenderer);

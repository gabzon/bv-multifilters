import React from 'react';

const stylePager = {
  margin: '0',
  padding: '0',
  textAlign: 'center',
  listStyle: 'none',
}

const styleLi = {
  display: 'inline-block',
  margin: '0 5px',
  width: '20px',
  textAlign: 'center',
}

class Pager extends React.Component {

  render(){
    let cur = +this.props.currentPage,
    max = +this.props.totalPages.length,
    go = this.props.pagesSwitcher;
    return (
      <ul className="pager" style={stylePager}>
        {cur > 1 && <li><button data-rel={cur - 1} onClick={go}>&lt;</button></li>}
        {this.props.totalPages.map((item,i) => {
          let isFirst = i === 0;
          let isLast = i === max - 1;

          if( (i < cur + 2 && i > cur - 4) || isFirst || isLast) {
            return <li key={i}><button data-rel={item} onClick={go}>{item}</button></li>
          } else if( i === cur - 5 || i === cur + 2) {
            return <li key={i}>...</li>
          }
          return null;
        })}
        {cur < max && <li style={styleLi}><button data-rel={cur + 1} onClick={go}>&gt;</button></li>}
      </ul>
    );
  }
}

export default Pager

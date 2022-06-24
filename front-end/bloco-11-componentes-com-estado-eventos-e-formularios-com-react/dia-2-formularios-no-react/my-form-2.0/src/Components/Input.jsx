import React from "react";

class Input extends React.Component{
  render() {
    const { title, type, maxLength,  } = this.props
    return (
      <label>
          Nome
          <input type="text" maxLength="40" style={{textTransform: 'uppercase'}} required />
        </label>
    )
  }
}
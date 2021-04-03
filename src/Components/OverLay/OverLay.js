import React from 'react';
import {Button,Overlay} from 'react-bootstrap';


export default function OverLay(props) {
    const [show, setShow] = React.useState(false);
    const target = React.useRef(null);
  
    return (
      <>
        <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
          {props.name}
        </Button>
        <Overlay target={target.current} show={show} placement="right">
          {({ placement, arrowProps, show: _show, popper}) => (
            <div
              style={{
                backgroundColor: 'rgba(255, 100, 100, 0.85)',
                padding: '2px 10px',
                color: 'white',
                borderRadius: 3,
              }}
            >
              {props.text}
            </div>
          )}
        </Overlay>
      </>
    );
}
  
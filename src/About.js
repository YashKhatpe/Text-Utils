import React from 'react';

export default function About(props) {
  return (
    <>
      <div className="accordion accordion-flush my-5" id="accordionFlushExample" >
  <div className="accordion-item" style={{backgroundColor: props.mode==='blue'?'#89CFF0':props.mode==='green'?'#90EE90': props.mode==='red'?'#D22730': props.mode==='yellow'?'#cfcf4e': props.mode==='light'?'white':props.mode==='dark'?'gray':'gray'}}>
    <h2 className="accordion-header">
      <button className={`btn btn-${props.mode==='light'?'light':props.mode==='dark'?'secondary':props.mode==='blue'?'primary':props.mode==='green'?'success':props.mode==='red'?'danger':props.mode==='yellow'?'warning':'secondary'} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor: props.mode==='blue'?'#89CFF0':props.mode==='green'?'#90EE90': props.mode==='red'?'#D22730': props.mode==='yellow'?'#cfcf4e': props.mode==='light'?'white':props.mode==='dark'?'gray':'gray'}}>
    <h2 className="accordion-header">
      <button className={`btn btn-${props.mode==='light'?'light':props.mode==='dark'?'secondary':props.mode==='blue'?'primary':props.mode==='green'?'success':props.mode==='red'?'danger':props.mode==='yellow'?'warning':'secondary'} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor: props.mode==='blue'?'#89CFF0':props.mode==='green'?'#90EE90': props.mode==='red'?'#D22730': props.mode==='yellow'?'#cfcf4e': props.mode==='light'?'white':props.mode==='dark'?'gray':'gray'}}>
    <h2 className="accordion-header">
      <button className={`btn btn-${props.mode==='light'?'light':props.mode==='dark'?'secondary':props.mode==='blue'?'primary':props.mode==='green'?'success':props.mode==='red'?'danger':props.mode==='yellow'?'warning':'secondary'} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
    </>
  );
}

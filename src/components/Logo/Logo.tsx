const Logo = () => {
  return (<>
    <img src={require("../../assets/images/indolakto.png")} alt="logo" className="w-52" />
  </>
    // <div style={{ color: "white" , fontStyle: "italic" , opacity: 0.4, fontWeight: "bold" }}>COMPANY LOGO</div>
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="102.999"
    //   height="16"
    //   viewBox="0 0 102.999 16"
    // >
    //   <g id="logo" transform="translate(-60 -19)">
    //     <g id="logo-2" data-name="logo" transform="translate(60 19)">
    //       <path
    //         id="パス_25"
    //         data-name="パス 25"
    //         d="M193.982,20.455a5.4,5.4,0,0,1-2.944,1.659,7.158,7.158,0,0,1-2.29.124,5.433,5.433,0,0,1-2.821-1.12,5.9,5.9,0,0,1-1.635-1.867,5.727,5.727,0,0,1-.654-1.825,6,6,0,0,1,.123-2.7,5.4,5.4,0,0,1,4.211-4.024,7.572,7.572,0,0,1,3.475.083,4.519,4.519,0,0,1,2.167,1.2,3.985,3.985,0,0,1,.94,1.245,3.493,3.493,0,0,1,.368,1.825h-3.761a1.972,1.972,0,0,0-.736-1.245,1.456,1.456,0,0,0-1.758-.083,1.854,1.854,0,0,0-.777,1,5.234,5.234,0,0,0-.041,3.07,2.389,2.389,0,0,0,.654,1.12,1.645,1.645,0,0,0,1.349.456,1.3,1.3,0,0,0,.777-.415,1.718,1.718,0,0,0,.409-.871,3.68,3.68,0,0,0,.082-.664h3.966a3.95,3.95,0,0,1-1.1,3.028"
    //         transform="translate(-92.098 -6.308)"
    //         fill="#fff"
    //       />
    //       <rect
    //         id="長方形_5"
    //         data-name="長方形 5"
    //         width="4.088"
    //         height="2.946"
    //         transform="translate(86.756 0)"
    //         fill="#fff"
    //       />
    //       <rect
    //         id="長方形_6"
    //         data-name="長方形 6"
    //         width="4.088"
    //         height="11.16"
    //         transform="translate(86.756 4.439)"
    //         fill="#fff"
    //       />
    //       <path
    //         id="パス_26"
    //         data-name="パス 26"
    //         d="M153.032,11.79a5.865,5.865,0,0,1,1.717-1.12,4.368,4.368,0,0,1,3.23-.249,3.575,3.575,0,0,1,2.453,2.448,6.111,6.111,0,0,1,.245,1.7v7.177H156.3V15.275a3.247,3.247,0,0,0-.082-.622,1.216,1.216,0,0,0-.7-.788,1.645,1.645,0,0,0-2.085.705,1.949,1.949,0,0,0-.245.954v6.223h-4.211V10.587h3.966Z"
    //         transform="translate(-74.82 -6.148)"
    //         fill="#fff"
    //       />
    //       <path
    //         id="パス_27"
    //         data-name="パス 27"
    //         d="M55.889,11.79a5.865,5.865,0,0,1,1.717-1.12,4.368,4.368,0,0,1,3.23-.249,3.575,3.575,0,0,1,2.453,2.448,6.111,6.111,0,0,1,.245,1.7v7.177H59.2V15.275a3.247,3.247,0,0,0-.082-.622,1.216,1.216,0,0,0-.7-.788,1.645,1.645,0,0,0-2.085.705,1.949,1.949,0,0,0-.245.954v6.223H51.842V10.587h3.966Z"
    //         transform="translate(-26.248 -6.148)"
    //         fill="#fff"
    //       />
    //       <path
    //         id="パス_28"
    //         data-name="パス 28"
    //         d="M106.219,17.7a7.033,7.033,0,0,1,.9.207.805.805,0,0,1,.491.539.821.821,0,0,1-.2.747,1.262,1.262,0,0,1-.736.373,1.709,1.709,0,0,1-1.1-.124,1.685,1.685,0,0,1-.45-.29.9.9,0,0,1-.368-.581,2.839,2.839,0,0,1-.082-.581h-4.007v.249a2.529,2.529,0,0,0,.2,1.079,3.784,3.784,0,0,0,.9,1.369,4.273,4.273,0,0,0,1.84,1.037,10.346,10.346,0,0,0,4.375.29,5.51,5.51,0,0,0,1.962-.664,4.99,4.99,0,0,0,.777-.5,3.411,3.411,0,0,0,1.063-3.692,2.879,2.879,0,0,0-.818-1.286,4.44,4.44,0,0,0-1.84-1c-.164-.041-.286-.083-.45-.124a16.681,16.681,0,0,0-2.494-.539c-.245-.041-.45-.083-.654-.124a2.575,2.575,0,0,1-.286-.083.5.5,0,0,1-.245-.664V13.3a.792.792,0,0,1,.572-.456,2.147,2.147,0,0,1,1.349.041,1.019,1.019,0,0,1,.7,1h3.884a3.64,3.64,0,0,0-.245-1.328,2.408,2.408,0,0,0-.777-1.12,3.611,3.611,0,0,0-1.022-.581,5.217,5.217,0,0,0-1.145-.332,12.163,12.163,0,0,0-2.739-.166,6.4,6.4,0,0,0-1.554.249,4.849,4.849,0,0,0-1.922.913,3.156,3.156,0,0,0-1.022,1.493,5.95,5.95,0,0,0-.164.83,2.639,2.639,0,0,0,.245,1.369,2.85,2.85,0,0,0,1.676,1.7,6.522,6.522,0,0,0,1.186.373c.613.124,1.349.29,2.208.415"
    //         transform="translate(-50.657 -6.208)"
    //         fill="#fff"
    //       />
    //       <path
    //         id="パス_29"
    //         data-name="パス 29"
    //         d="M8.136,12.861H5.315V9.21h1.84a7.448,7.448,0,0,0,.981-.041,1.61,1.61,0,0,0,1.186-.622,1.374,1.374,0,0,0,.286-.664,1.594,1.594,0,0,0,0-.622A1.531,1.531,0,0,0,8.054,5.85H5.315V17.715H.654V2.074H8.3a5.951,5.951,0,0,1,.859.041A5.232,5.232,0,0,1,13.7,5.227a5.249,5.249,0,0,1,.491,2.946,5.087,5.087,0,0,1-3.966,4.48,8.894,8.894,0,0,1-2.085.207"
    //         transform="translate(-0.654 -2.074)"
    //         fill="#fff"
    //       />
    //       <path
    //         id="パス_30"
    //         data-name="パス 30"
    //         d="M130.8,10.455a6.3,6.3,0,0,0-1.227-.083,11.411,11.411,0,0,0-1.227.083,5.508,5.508,0,0,0-3.189,1.618,5.359,5.359,0,0,0-1.635,3.485,6.87,6.87,0,0,0,.2,2.406,5.442,5.442,0,0,0,2,3.028,5.269,5.269,0,0,0,2.167,1.037,7.785,7.785,0,0,0,1.717.166,8.031,8.031,0,0,0,1.717-.166,4.8,4.8,0,0,0,2.167-1.037l-2.371-2.614a1.638,1.638,0,0,1-2.167.83,1.608,1.608,0,0,1-.818-.83,4.707,4.707,0,0,1-.327-1.079,6.869,6.869,0,0,1,.041-2.24,2.523,2.523,0,0,1,.45-1.079,1.583,1.583,0,0,1,2.657,0,3.163,3.163,0,0,1,.45,1.079,5.9,5.9,0,0,1,.041,2.24,3.628,3.628,0,0,1-.327,1.079l2.371,2.614a5.442,5.442,0,0,0,2-3.028,5.963,5.963,0,0,0,.2-2.406,5.359,5.359,0,0,0-1.635-3.485,5.989,5.989,0,0,0-3.271-1.618"
    //         transform="translate(-62.073 -6.223)"
    //         fill="#fff"
    //       />
    //       <path
    //         id="パス_31"
    //         data-name="パス 31"
    //         d="M87.817,21.005c-.082-.913-.082-1.7-.123-2.614-.041-1.2-.041-2.24-.041-3.443a6.777,6.777,0,0,0-.245-1.825,2.862,2.862,0,0,0-1.431-1.867,4.091,4.091,0,0,0-1.349-.5,11.354,11.354,0,0,0-4.579-.083,6.019,6.019,0,0,0-1.227.373,3.405,3.405,0,0,0-1.962,2.157,2.754,2.754,0,0,0-.123,1.162c0,.083.041.124.041.207l3.68.083a3.269,3.269,0,0,1,.082-.664,1.177,1.177,0,0,1,.7-.705,2.241,2.241,0,0,1,1.472-.041.949.949,0,0,1,.654.705.59.59,0,0,1-.082.581,1.041,1.041,0,0,1-.409.332c-.123.041-.2.083-.327.124-.531.124-.94.249-1.472.332-.409.083-.777.124-1.186.207-.572.124-1.022.249-1.554.415a3.039,3.039,0,0,0-1.267.747,2.876,2.876,0,0,0-.9,1.7,3.407,3.407,0,0,0,.041,1.286,3.1,3.1,0,0,0,2.167,2.365,5.48,5.48,0,0,0,3.639-.166A3.657,3.657,0,0,0,83.442,20.8L83.2,18.889a1.542,1.542,0,0,1-.736.622,3.356,3.356,0,0,1-.859.249,1.449,1.449,0,0,1-.736-.083,1.051,1.051,0,0,1-.531-.332.993.993,0,0,1-.245-.456.844.844,0,0,1,.245-.747,2.746,2.746,0,0,1,.45-.29,10.675,10.675,0,0,1,1.227-.415,15.455,15.455,0,0,0,1.472-.539,5.516,5.516,0,0,1,0,1.162,1.835,1.835,0,0,1-.286.788l.245,1.908c.082.29.164.5.245.747a1.092,1.092,0,0,0,.2.373H87.98c-.041-.29-.123-.539-.164-.871"
    //         transform="translate(-38.388 -6.278)"
    //         fill="#fff"
    //       />
    //       <path
    //         id="パス_32"
    //         data-name="パス 32"
    //         d="M38.551,21.005c-.082-.913-.082-1.7-.123-2.614-.041-1.2-.041-2.24-.041-3.443a6.778,6.778,0,0,0-.245-1.825,2.862,2.862,0,0,0-1.431-1.867,4.091,4.091,0,0,0-1.349-.5,11.354,11.354,0,0,0-4.579-.083,6.019,6.019,0,0,0-1.227.373,3.405,3.405,0,0,0-1.962,2.157,2.754,2.754,0,0,0-.123,1.162c0,.083.041.124.041.207l3.68.083a3.269,3.269,0,0,1,.082-.664,1.177,1.177,0,0,1,.7-.705,2.241,2.241,0,0,1,1.472-.041.949.949,0,0,1,.654.705.59.59,0,0,1-.082.581,1.041,1.041,0,0,1-.409.332c-.123.041-.2.083-.327.124-.532.124-.94.249-1.472.332-.409.083-.777.124-1.186.207-.572.124-1.022.249-1.554.415a3.039,3.039,0,0,0-1.267.747,2.625,2.625,0,0,0-.859,1.7,3.407,3.407,0,0,0,.041,1.286,3.1,3.1,0,0,0,2.167,2.365,5.48,5.48,0,0,0,3.639-.166A3.657,3.657,0,0,0,34.217,20.8l-.245-1.908a1.542,1.542,0,0,1-.736.622,3.356,3.356,0,0,1-.859.249,1.448,1.448,0,0,1-.736-.083,1.051,1.051,0,0,1-.532-.332.993.993,0,0,1-.245-.456.844.844,0,0,1,.245-.747,2.745,2.745,0,0,1,.45-.29,10.674,10.674,0,0,1,1.227-.415,15.455,15.455,0,0,0,1.472-.539,5.515,5.515,0,0,1,0,1.162,1.835,1.835,0,0,1-.286.788l.245,1.908c.082.29.164.5.245.747a1.092,1.092,0,0,0,.2.373h4.088a5.423,5.423,0,0,1-.2-.871"
    //         transform="translate(-13.775 -6.278)"
    //         fill="#fff"
    //       />
    //     </g>
    //     <path
    //       id="Color_Overlay"
    //       data-name="Color Overlay"
    //       d="M39.985,15.765A3.1,3.1,0,0,1,37.818,13.4a3.4,3.4,0,0,1-.041-1.286,2.878,2.878,0,0,1,.9-1.7,3.034,3.034,0,0,1,1.267-.747c.531-.166.981-.291,1.554-.415.409-.083.777-.125,1.186-.207.531-.083.94-.207,1.471-.332.123-.041.2-.083.327-.124a1.043,1.043,0,0,0,.409-.332.591.591,0,0,0,.082-.581.95.95,0,0,0-.654-.705,2.242,2.242,0,0,0-1.472.041,1.178,1.178,0,0,0-.7.706,3.294,3.294,0,0,0-.081.664L38.39,8.3c0-.083-.041-.124-.041-.207a2.75,2.75,0,0,1,.123-1.161,3.4,3.4,0,0,1,1.962-2.157A6.026,6.026,0,0,1,41.661,4.4a11.353,11.353,0,0,1,4.579.083,4.087,4.087,0,0,1,1.349.5A2.861,2.861,0,0,1,49.02,6.845a6.764,6.764,0,0,1,.245,1.825c0,1.2,0,2.24.041,3.443.041.913.041,1.7.123,2.614.041.332.122.581.163.871H45.5a1.093,1.093,0,0,1-.2-.373c-.081-.249-.163-.456-.245-.747l-.245-1.908a1.831,1.831,0,0,0,.286-.788,5.5,5.5,0,0,0,0-1.161,15.352,15.352,0,0,1-1.472.539,10.767,10.767,0,0,0-1.226.415,2.755,2.755,0,0,0-.45.291.844.844,0,0,0-.245.747.994.994,0,0,0,.245.456,1.052,1.052,0,0,0,.531.332,1.452,1.452,0,0,0,.736.083,3.345,3.345,0,0,0,.859-.249,1.538,1.538,0,0,0,.736-.622l.245,1.908A3.656,3.656,0,0,1,43.623,15.6a5.874,5.874,0,0,1-2.072.4A5.5,5.5,0,0,1,39.985,15.765Zm-24.612,0A3.1,3.1,0,0,1,13.206,13.4a3.4,3.4,0,0,1-.041-1.286,2.626,2.626,0,0,1,.859-1.7,3.033,3.033,0,0,1,1.268-.747c.531-.166.981-.291,1.553-.415.409-.083.777-.125,1.186-.207.531-.083.94-.207,1.472-.332.122-.041.2-.083.327-.124a1.042,1.042,0,0,0,.409-.332.589.589,0,0,0,.082-.581.95.95,0,0,0-.654-.705,2.242,2.242,0,0,0-1.472.041,1.177,1.177,0,0,0-.695.706,3.26,3.26,0,0,0-.082.664L13.737,8.3c0-.083-.041-.124-.041-.207a2.749,2.749,0,0,1,.123-1.161,3.4,3.4,0,0,1,1.962-2.157A6.022,6.022,0,0,1,17.008,4.4a11.351,11.351,0,0,1,4.579.083,4.089,4.089,0,0,1,1.35.5,2.864,2.864,0,0,1,1.431,1.867,6.782,6.782,0,0,1,.245,1.825c0,1.2,0,2.24.04,3.443.041.913.041,1.7.123,2.614a5.453,5.453,0,0,0,.2.871H20.892a1.085,1.085,0,0,1-.2-.373c-.082-.249-.164-.456-.246-.747L20.2,12.57a1.831,1.831,0,0,0,.286-.788,5.506,5.506,0,0,0,0-1.161,15.307,15.307,0,0,1-1.472.539,10.768,10.768,0,0,0-1.226.415,2.755,2.755,0,0,0-.45.291.844.844,0,0,0-.245.747.994.994,0,0,0,.245.456,1.051,1.051,0,0,0,.532.332,1.451,1.451,0,0,0,.736.083,3.345,3.345,0,0,0,.859-.249,1.538,1.538,0,0,0,.736-.622l.245,1.908A3.656,3.656,0,0,1,19.011,15.6a5.874,5.874,0,0,1-2.072.4A5.5,5.5,0,0,1,15.372,15.765Zm81.278.166a5.436,5.436,0,0,1-2.821-1.12,5.9,5.9,0,0,1-1.635-1.867,5.721,5.721,0,0,1-.654-1.826,5.993,5.993,0,0,1,.122-2.7A5.4,5.4,0,0,1,95.874,4.4a7.569,7.569,0,0,1,3.475.083,4.518,4.518,0,0,1,2.167,1.2,3.986,3.986,0,0,1,.941,1.245,3.5,3.5,0,0,1,.368,1.825H99.063a1.971,1.971,0,0,0-.736-1.244,1.455,1.455,0,0,0-1.758-.083,1.855,1.855,0,0,0-.777,1,5.237,5.237,0,0,0-.04,3.07,2.384,2.384,0,0,0,.654,1.12,1.644,1.644,0,0,0,1.349.456,1.3,1.3,0,0,0,.777-.415,1.719,1.719,0,0,0,.409-.871,3.672,3.672,0,0,0,.082-.664h3.966a3.949,3.949,0,0,1-1.1,3.028,5.4,5.4,0,0,1-2.944,1.66,7.571,7.571,0,0,1-1.533.166A7.024,7.024,0,0,1,96.65,15.931Zm-30.826-.125a5.269,5.269,0,0,1-2.167-1.037,5.442,5.442,0,0,1-2-3.028,6.869,6.869,0,0,1-.2-2.406,5.361,5.361,0,0,1,1.635-3.485,5.51,5.51,0,0,1,3.189-1.618A11.437,11.437,0,0,1,67.5,4.148a6.315,6.315,0,0,1,1.226.083A5.991,5.991,0,0,1,72,5.849a5.361,5.361,0,0,1,1.635,3.485,5.962,5.962,0,0,1-.2,2.406,5.442,5.442,0,0,1-2,3.028,4.8,4.8,0,0,1-2.167,1.037,8.015,8.015,0,0,1-1.717.166A7.773,7.773,0,0,1,65.824,15.806Zm.409-8.048a2.519,2.519,0,0,0-.45,1.079,6.857,6.857,0,0,0-.041,2.24,4.7,4.7,0,0,0,.327,1.079,1.607,1.607,0,0,0,.818.83,1.638,1.638,0,0,0,2.167-.83,3.622,3.622,0,0,0,.327-1.079,5.891,5.891,0,0,0-.041-2.24,3.165,3.165,0,0,0-.45-1.079,1.577,1.577,0,0,0-2.658,0ZM52.945,15.516a4.275,4.275,0,0,1-1.84-1.037,3.782,3.782,0,0,1-.9-1.369,2.534,2.534,0,0,1-.2-1.079v-.249h4.006a2.838,2.838,0,0,0,.082.581.9.9,0,0,0,.368.581,1.685,1.685,0,0,0,.45.29,1.71,1.71,0,0,0,1.1.125,1.264,1.264,0,0,0,.736-.373.822.822,0,0,0,.2-.747.8.8,0,0,0-.49-.539,7.049,7.049,0,0,0-.9-.207c-.859-.125-1.594-.29-2.208-.415a6.5,6.5,0,0,1-1.186-.373A2.85,2.85,0,0,1,50.492,9a2.641,2.641,0,0,1-.245-1.369,6.014,6.014,0,0,1,.163-.83A3.157,3.157,0,0,1,51.433,5.31,4.846,4.846,0,0,1,53.354,4.4a6.391,6.391,0,0,1,1.553-.249,12.165,12.165,0,0,1,2.74.166,5.231,5.231,0,0,1,1.145.332,3.622,3.622,0,0,1,1.022.581,2.4,2.4,0,0,1,.777,1.12,3.634,3.634,0,0,1,.245,1.327H56.952a1.019,1.019,0,0,0-.695-1,2.146,2.146,0,0,0-1.35-.041.793.793,0,0,0-.572.456v.041a.5.5,0,0,0,.245.664,2.605,2.605,0,0,0,.286.083c.2.042.409.083.654.125a16.654,16.654,0,0,1,2.494.539c.164.042.286.083.45.125a4.437,4.437,0,0,1,1.84,1,2.872,2.872,0,0,1,.818,1.286,3.411,3.411,0,0,1-1.063,3.692,4.991,4.991,0,0,1-.777.5,5.513,5.513,0,0,1-1.962.664,11.756,11.756,0,0,1-1.564.109A10.153,10.153,0,0,1,52.945,15.516ZM0,15.64V0H7.645A5.964,5.964,0,0,1,8.5.041a5.233,5.233,0,0,1,4.538,3.111,5.253,5.253,0,0,1,.49,2.946,5.088,5.088,0,0,1-3.966,4.481,8.887,8.887,0,0,1-2.085.207H4.661V15.64Zm4.661-8.5H6.5a7.459,7.459,0,0,0,.981-.041,1.61,1.61,0,0,0,1.186-.622,1.372,1.372,0,0,0,.286-.664,1.592,1.592,0,0,0,0-.622A1.531,1.531,0,0,0,7.4,3.775H4.661Zm82.1,8.463V4.439h4.089V15.6Zm-5.274,0V9.127A3.244,3.244,0,0,0,81.4,8.5a1.213,1.213,0,0,0-.695-.788,1.644,1.644,0,0,0-2.085.705,1.951,1.951,0,0,0-.245.954V15.6H74.164V4.439H78.13l.082,1.2a5.862,5.862,0,0,1,1.717-1.12,4.365,4.365,0,0,1,3.23-.249,3.575,3.575,0,0,1,2.453,2.448,6.12,6.12,0,0,1,.245,1.7V15.6Zm-48.53,0V9.127a3.242,3.242,0,0,0-.082-.622,1.213,1.213,0,0,0-.695-.788,1.644,1.644,0,0,0-2.085.705,1.951,1.951,0,0,0-.245.954V15.6H25.593V4.439h3.966l.082,1.2a5.862,5.862,0,0,1,1.717-1.12,4.365,4.365,0,0,1,3.23-.249,3.575,3.575,0,0,1,2.453,2.448,6.119,6.119,0,0,1,.245,1.7V15.6Zm53.8-12.653V0h4.089V2.945Z"
    //       transform="translate(60 19)"
    //       fill="#fff"
    //     />
    //   </g>
    // </svg>
  );
};

export default Logo;

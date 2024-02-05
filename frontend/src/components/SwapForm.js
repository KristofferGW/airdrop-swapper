import React from "react";

function SwapForm() {
    return (
        <div>
            <label htmlFor="chain">Chain</label>
            <input type="text" id="chain" />

            <label htmlFor="from">From</label>
            <input type="text" id="from" />

            <label htmlFor="to">To</label>
            <input type="text" id="from" />
        </div>
    );
}

export default SwapForm;
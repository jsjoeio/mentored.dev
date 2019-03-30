import React from "react";

function Select<T>(props: { data: T[], value: T }) { return <div>
        These are my options
    </div>; }


// usage

const MyComponent = () => <div>

    <Select<number>
        data={
            [
                1,2,3
            ]
        }
        value={
            2
        }
    />
</div>
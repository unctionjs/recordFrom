/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import recordFrom from "./source"

test(({same, end}) => {
  same(
    recordFrom(["key", "subkey"])("value"),
    {key: {subkey: "value"}}
  )

  end()
})

/** section: github
 * mixin people
 **/
/** section: github
 *  people#getCurrent(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  No other params, simply pass an empty Object literal `{}`
 **/
/** section: github
 *  people#getMember(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - id (String): Required.
 **/
/** section: github
 *  people#getMemberPublic(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - url (String): Required.
 **/
/** section: github
 *  people#getCurrentConnections(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - start (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - modified (Boolean): Optional. Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 *  - modified-since (Date): Optional. Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 **/
/** section: github
 *  people#getMemberConnections(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - id (String): Required.
 *  - start (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - modified (Boolean): Optional. Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 *  - modified-since (Date): Optional. Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 **/
/** section: github
 *  people#getMemberPublicConnections(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - url (String): Required.
 *  - start (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - modified (Boolean): Optional. Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 *  - modified-since (Date): Optional. Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 **/
/** section: github
 * mixin groups
 **/
/** section: github
 *  groups#one(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - url (String): Required.
 *  - start (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - modified (Boolean): Optional. Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 *  - modified-since (Date): Optional. Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 **/
/** section: github
 *  groups#getMemberships(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - membership-state (Array): Optional.
 *  - start (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  groups#getSettings(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - membership-state (Array): Optional.
 *  - group-id (String): Optional.
 *  - start (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: github
 *  groups#settings(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - group-id (String): Optional.
 **/
/** section: github
 *  groups#addGroup(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  No other params, simply pass an empty Object literal `{}`
 **/
/** section: github
 *  groups#removeGroup(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - group-id (String): Optional.
 **/
/** section: github
 *  groups#getPosts(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - group-id (String): Optional.
 *  - start (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - role (Array): Optional.
 *  - category (Array): Optional.
 **/
/** section: github
 *  groups#getMembershipsPosts(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - group-id (String): Optional.
 **/
/** section: github
 *  groups#getSuggestionsPosts(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - group-id (String): Optional.
 **/
/** section: github
 * mixin company
 **/
/** section: github
 *  company#one(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - company-id (String): Required.
 **/
/** section: github
 *  company#oneByUniversalName(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - universal-name (String): Required.
 **/
/** section: github
 *  company#oneByEmailDomain(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - email-domain (String): Required.
 **/

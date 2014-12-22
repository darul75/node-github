/** section: linked
 * mixin people
 **/
/** section: linked
 *  people#getCurrent(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - url-field-selector (String): Optional.
 **/
/** section: linked
 *  people#getMember(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - id (String): Required.
 **/
/** section: linked
 *  people#getMemberPublic(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - url (String): Required.
 **/
/** section: linked
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
 *  - url-field-selector (String): Optional.
 **/
/** section: linked
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
/** section: linked
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
/** section: linked
 * mixin groups
 **/
/** section: linked
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
 *  - url-field-selector (String): Optional.
 **/
/** section: linked
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
 *  - url-field-selector (String): Optional.
 **/
/** section: linked
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
/** section: linked
 *  groups#settings(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - group-id (String): Optional.
 **/
/** section: linked
 *  groups#addGroup(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  No other params, simply pass an empty Object literal `{}`
 **/
/** section: linked
 *  groups#removeGroup(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - group-id (String): Optional.
 **/
/** section: linked
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
 *  - url-field-selector (String): Optional.
 **/
/** section: linked
 *  groups#getMembershipsPosts(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - group-id (String): Optional.
 **/
/** section: linked
 *  groups#getSuggestionsPosts(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - group-id (String): Optional.
 **/
/** section: linked
 * mixin company
 **/
/** section: linked
 *  company#current(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - url-field-selector (String): Optional.
 *  - is-company-admin (Boolean): Optional.
 *  - start (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - end (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: linked
 *  company#one(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - company-id (String): Required.
 **/
/** section: linked
 *  company#oneByUniversalName(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - universal-name (String): Required.
 **/
/** section: linked
 *  company#oneByEmailDomain(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - email-domain (String): Required.
 **/
/** section: linked
 *  company#oneUpdate(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - event-type (String): Optional.
 *  - start (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 **/
/** section: linked
 *  company#oneUpdateComments(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - event-type (String): Optional.
 **/
/** section: linked
 *  company#oneUpdateCommentsLike(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  - event-type (String): Optional.
 **/
/** section: linked
 *  company#oneShares(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  No other params, simply pass an empty Object literal `{}`
 **/
/** section: linked
 *  company#oneShareEnabled(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  No other params, simply pass an empty Object literal `{}`
 **/
/** section: linked
 *  company#currentShareEnabled(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - headers (Object): Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent', 'Accept', 'X-Linked-OTP'.
 *  No other params, simply pass an empty Object literal `{}`
 **/

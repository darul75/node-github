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
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 *  - secure-urls (Boolean): Optional.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~
 * - Documentation [link](https://developer.linkedin.com/documents/profile-api)
 **/
/** section: linked
 *  people#getMember(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - id (String): Required.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/
 * - Documentation [link](undefined)
 **/
/** section: linked
 *  people#getPublic(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - url (String): Required.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/
 * - Documentation [link](undefined)
 **/
/** section: linked
 *  people#getCurrentConnections(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - start (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - modified (Boolean): Optional. Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 *  - modified-since (Date): Optional. Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/connections
 * - Documentation [link](undefined)
 **/
/** section: linked
 *  people#getMemberConnections(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - id (String): Required.
 *  - start (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - modified (Boolean): Optional. Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 *  - modified-since (Date): Optional. Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/:id/connections
 * - Documentation [link](undefined)
 **/
/** section: linked
 *  people#getMemberPublicConnections(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - url (String): Required.
 *  - start (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - modified (Boolean): Optional. Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 *  - modified-since (Date): Optional. Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/
 * - Documentation [link](undefined)
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
 *  - url (String): Required.
 *  - start (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - modified (Boolean): Optional. Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 *  - modified-since (Date): Optional. Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - Rest api url `/groups/:id
 * - Documentation [link](undefined)
 **/
/** section: linked
 *  groups#getMemberships(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - membership-state (Array): Optional.
 *  - start (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/group-memberships
 * - Documentation [link](undefined)
 **/
/** section: linked
 *  groups#getSettings(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - membership-state (Array): Optional.
 *  - group-id (String): Optional.
 *  - start (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/group-memberships/:group-id
 * - Documentation [link](undefined)
 **/
/** section: linked
 *  groups#settings(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - group-id (String): Optional.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/group-memberships/:group-id
 * - Documentation [link](undefined)
 **/
/** section: linked
 *  groups#addGroup(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  No other params, simply pass an empty Object literal `{}`
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/group-memberships
 * - Documentation [link](undefined)
 **/
/** section: linked
 *  groups#removeGroup(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - group-id (String): Optional.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/group-memberships
 * - Documentation [link](undefined)
 **/
/** section: linked
 *  groups#getPosts(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - group-id (String): Optional.
 *  - start (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - role (Array): Optional.
 *  - category (Array): Optional.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - Rest api url `/groups/{group-id}/posts
 * - Documentation [link](undefined)
 **/
/** section: linked
 *  groups#getMembershipsPosts(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - group-id (String): Optional.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/group-memberships/{group-id}/posts
 * - Documentation [link](undefined)
 **/
/** section: linked
 *  groups#getSuggestionsPosts(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - group-id (String): Optional.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/group-memberships/{group-id}/posts
 * - Documentation [link](undefined)
 **/
/** section: linked
 * mixin company
 **/
/** section: linked
 *  company#all(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 *  - is-company-admin (Boolean): Optional.
 *  - start (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/companies
 * - Documentation [link](undefined)
 **/
/** section: linked
 *  company#one(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - company-id (String): Required.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/companies/:company-id
 * - Documentation [link](undefined)
 **/
/** section: linked
 *  company#oneByUniversalName(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - universal-name (String): Required.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/companies/
 * - Documentation [link](undefined)
 **/
/** section: linked
 *  company#oneByEmailDomain(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - email-domain (String): Required.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/companies
 * - Documentation [link](undefined)
 **/
/** section: linked
 *  company#oneUpdate(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - company-id (String): Required.
 *  - event-type (String): Optional.
 *  - start (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/companies/:company-id/updates
 * - Documentation [link](undefined)
 **/
/** section: linked
 *  company#oneUpdateComments(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - company-id (String): Required.
 *  - company-update-key (String): Optional.
 *  - event-type (String): Optional.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/companies/:company-id/updates/key=:company-update-key/update-comments
 * - Documentation [link](undefined)
 **/
/** section: linked
 *  company#oneUpdateCommentsLike(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - company-id (String): Required.
 *  - company-update-key (String): Optional.
 *  - event-type (String): Optional.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/companies/:company-id/updates/key=:company-update-key/likes
 * - Documentation [link](undefined)
 **/
/** section: linked
 *  company#oneShares(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - company-id (String): Required.
 *  - comment (String): Optional.
 *  - visibility (String): Required.
 *  - content (Json): Optional.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/companies/:company-id/shares
 * - Documentation [link](undefined)
 **/
/** section: linked
 *  company#oneShareEnabled(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - company-id (String): Required.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/companies/:company-id/is-company-share-enabled
 * - Documentation [link](undefined)
 **/
/** section: linked
 *  company#currentShareEnabled(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - company-id (String): Required.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/companies/:company-id/relation-to-viewer/is-company-share-enabled
 * - Documentation [link](undefined)
 **/

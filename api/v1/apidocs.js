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
 *  - secure-urls (Boolean): Optional. Indicate that you want the URLs in your response to be HTTPS
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
 *  - id (String): Optional.
 *  - url (String): Optional. Public profile URL
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 *  - secure-urls (Boolean): Optional. Indicate that you want the URLs in your response to be HTTPS
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/
 * - Documentation [link](https://developer.linkedin.com/documents/profile-api)
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
 *  - modified (String): Optional. Values are: 'updated' or 'new'
 *  - modified-since (Number): Optional. In miliseconds since epoch
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/connections
 * - Documentation [link](https://developer.linkedin.com/documents/connections-api)
 **/
/** section: linked
 *  people#getMemberConnections(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - idOrUrl (String): Required. Profile Id or public URL
 *  - start (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - modified (String): Optional. Values are: 'updated' or 'new'
 *  - modified-since (Number): Optional. In miliseconds since epoch
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/:idOrUrl/connections
 * - Documentation [link](https://developer.linkedin.com/documents/connections-api)
 **/
/** section: linked
 *  people#search(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - keywords (String): Optional.
 *  - first-name (String): Optional.
 *  - last-name (String): Optional.
 *  - company-name (String): Optional.
 *  - current-company (String): Optional.
 *  - title (String): Optional.
 *  - current-title (String): Optional.
 *  - school-name (String): Optional.
 *  - current-school (String): Optional.
 *  - country-code (String): Optional.
 *  - postal-code (String): Optional.
 *  - distance (String): Optional.
 *  - facet (String): Optional.
 *  - facets (String): Optional.
 *  - start (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - sort (String): Optional.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people-search
 * - Documentation [link](https://developer.linkedin.com/documents/people-search-api)
 **/
/** section: linked
 * mixin groups
 **/
/** section: linked
 *  groups#getDetail(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - group-id (String): Optional.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - Rest api url `/groups/:group-id
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#profiledetails)
 **/
/** section: linked
 *  groups#getMembershipDetail(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - group-id (String): Optional.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/group-memberships/:group-id
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#membergroups)
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
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#membergroups)
 **/
/** section: linked
 *  groups#updateMembership(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - group-id (String): Optional.
 *  - data (Json): Required. See https://developer.linkedin.com/documents/groups-fields
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/group-memberships/:group-id
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#membergroups)
 **/
/** section: linked
 *  groups#updateMembershipFull(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - data (Json): Required. See https://developer.linkedin.com/documents/groups-fields
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/group-memberships/
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#membergroups)
 **/
/** section: linked
 *  groups#join(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  No other params, simply pass an empty Object literal `{}`
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/group-memberships/:group-id
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#membergroups)
 **/
/** section: linked
 *  groups#joinAdvanced(msg, callback) -> null
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
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#membergroups)
 **/
/** section: linked
 *  groups#remove(msg, callback) -> null
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
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#membergroups)
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
 * - Rest api url `/groups/:group-id/posts
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#groupposts)
 **/
/** section: linked
 *  groups#getMembershipPosts(msg, callback) -> null
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
 * - Rest api url `/people/~/group-memberships/:group-id/posts
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#groupposts)
 **/
/** section: linked
 *  groups#getSuggestionPosts(msg, callback) -> null
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
 * - Rest api url `/people/~/suggestions/groups/:group-id/posts
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#groupposts)
 **/
/** section: linked
 *  groups#addPost(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - group-id (String): Optional.
 *  - data (Json): Required. See https://developer.linkedin.com/documents/groups-fields
 * 
 *  ##### See Also
 * 
 * - Rest api url `/groups/:group-id/posts
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#create)
 **/
/** section: linked
 *  groups#getPost(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - post-id (String): Required.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - Rest api url `/posts/:post-id
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#post)
 **/
/** section: linked
 *  groups#getPostsComments(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - group-id (String): Optional.
 *  - post-id (String): Required.
 *  - start (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - Rest api url `/posts/:post-id/comments
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#post)
 **/
/** section: linked
 *  groups#likePost(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - post-id (String): Required.
 *  - data (Json): Required.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/posts/:post-id/relation-to-viewer/is-liked
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#post)
 **/
/** section: linked
 *  groups#followPost(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - post-id (String): Required.
 *  - data (Json): Required.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/posts/:post-id/relation-to-viewer/is-following
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#post)
 **/
/** section: linked
 *  groups#flagPost(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - post-id (String): Required.
 *  - data (Json): Required. See https://developer.linkedin.com/documents/groups-fields
 * 
 *  ##### See Also
 * 
 * - Rest api url `/posts/:post-id/category/code
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#post)
 **/
/** section: linked
 *  groups#removeFlagPost(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - post-id (String): Required.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/posts/:post-id
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#post)
 **/
/** section: linked
 *  groups#getComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - comment-id (String): Required.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - Rest api url `/comments/:comment-id
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#comments)
 **/
/** section: linked
 *  groups#postComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - post-id (String): Required.
 *  - data (Json): Required. See https://developer.linkedin.com/documents/groups-fields
 * 
 *  ##### See Also
 * 
 * - Rest api url `/post/:post-id/comments
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#comments)
 **/
/** section: linked
 *  groups#deleteComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - comment-id (String): Required.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/comments/:comment-id
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#comments)
 **/
/** section: linked
 *  groups#getFromSuggestions(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  No other params, simply pass an empty Object literal `{}`
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/suggestions/groups/
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#suggestgroups)
 **/
/** section: linked
 *  groups#removeSuggestions(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - id (String): Optional.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/suggestions/groups/:id
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#suggestgroups)
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
 * - Documentation [link](https://developer.linkedin.com/documents/company-lookup-api-and-fields)
 **/
/** section: linked
 *  company#get(msg, callback) -> null
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
 * - Documentation [link](https://developer.linkedin.com/documents/company-lookup-api-and-fields)
 **/
/** section: linked
 *  company#getByUniversalName(msg, callback) -> null
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
 * - Documentation [link](https://developer.linkedin.com/documents/company-lookup-api-and-fields)
 **/
/** section: linked
 *  company#getByEmailDomain(msg, callback) -> null
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
 * - Documentation [link](https://developer.linkedin.com/documents/company-lookup-api-and-fields)
 **/
/** section: linked
 *  company#getUpdate(msg, callback) -> null
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
 * - Documentation [link](https://developer.linkedin.com/reading-company-shares)
 **/
/** section: linked
 *  company#getUpdateComments(msg, callback) -> null
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
 * - Documentation [link](https://developer.linkedin.com/reading-company-shares)
 **/
/** section: linked
 *  company#getUpdateCommentsLike(msg, callback) -> null
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
 * - Documentation [link](https://developer.linkedin.com/reading-company-shares)
 **/
/** section: linked
 *  company#addShares(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - company-id (String): Required.
 *  - data (Json): Required. See https://developer.linkedin.com/documents/groups-fields
 * 
 *  ##### See Also
 * 
 * - Rest api url `/companies/:company-id/shares
 * - Documentation [link](https://developer.linkedin.com/documents/targeting-company-shares)
 **/
/** section: linked
 *  company#getShareEnabled(msg, callback) -> null
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
 * - Documentation [link](https://developer.linkedin.com/creating-company-shares)
 **/
/** section: linked
 *  company#getCurrentShareEnabled(msg, callback) -> null
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
 * - Documentation [link](https://developer.linkedin.com/creating-company-shares)
 **/
/** section: linked
 *  company#getHistoricalFollowersStatistics(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - company-id (String): Required.
 *  - start-timestamp (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - end-timestamp (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - time-granularity (String): Optional.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/companies/:company-id/historical-follow-statistics
 * - Documentation [link](https://developer.linkedin.com/historical-company-statistics)
 **/
/** section: linked
 *  company#getHistoricalStatusUpdate(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - company-id (String): Required.
 *  - start-timestamp (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - end-timestamp (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - time-granularity (String): Optional.
 *  - update-key (String): Optional.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - Rest api url `/companies/:company-id/historical-status-update-statistics
 * - Documentation [link](https://developer.linkedin.com/historical-company-statistics)
 **/
/** section: linked
 *  company#getStatistics(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - company-id (String): Required.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/companies/:company-id/company-statistics
 * - Documentation [link](https://developer.linkedin.com/company-statistics)
 **/
/** section: linked
 *  company#getNumFollowers(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - seniorities (String): Optional.
 *  - geos (String): Optional.
 *  - companySizes (String): Optional.
 *  - jobFunc (String): Optional.
 *  - industries (String): Optional.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/companies/:company-id/num-followers
 * - Documentation [link](https://developer.linkedin.com/documents/targeting-company-shares)
 **/
/** section: linked
 *  company#addShareComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - update-key (String): Optional.
 *  - data (Json): Required.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/network/updates/key=:update-key/update-comments
 * - Documentation [link](https://developer.linkedin.com/documents/commenting-and-liking-company-share)
 **/
/** section: linked
 *  company#likeShareComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - update-key (String): Optional.
 *  - data (Json): Required.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/network/updates/key=:update-key/is-liked
 * - Documentation [link](https://developer.linkedin.com/documents/commenting-and-liking-company-share)
 **/
/** section: linked
 *  company#addUpdateComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - update-key (String): Optional.
 *  - company-id (String): Required.
 *  - data (Json): Required.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/companies/:company-id/updates/key=:update-key/update-comments-as-company/
 * - Documentation [link](https://developer.linkedin.com/documents/commenting-and-liking-company-share)
 **/
/** section: linked
 *  company#search(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - keywords (String): Optional.
 *  - hq-only (String): Optional.
 *  - facet (String): Optional.
 *  - facets (String): Optional.
 *  - start (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - sort (String): Optional.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - Rest api url `/company-search
 * - Documentation [link](https://developer.linkedin.com/documents/company-search)
 **/
/** section: linked
 * mixin jobs
 **/
/** section: linked
 *  jobs#get(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - job-id (String): Optional.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - Rest api url `/jobs/:job-id
 * - Documentation [link](https://developer.linkedin.com/documents/job-lookup-api-and-fields)
 **/
/** section: linked
 *  jobs#getCurrentBookmarks(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/job-bookmarks
 * - Documentation [link](https://developer.linkedin.com/documents/job-bookmarks-and-suggestions)
 **/
/** section: linked
 *  jobs#bookmark(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - data (Json): Required.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/job-bookmarks
 * - Documentation [link](https://developer.linkedin.com/documents/job-bookmarks-and-suggestions)
 **/
/** section: linked
 *  jobs#removeBookmark(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - job-id (String): Optional.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/job-bookmarks/:job-id
 * - Documentation [link](https://developer.linkedin.com/documents/job-bookmarks-and-suggestions)
 **/
/** section: linked
 *  jobs#getCurrentSuggestions(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - job-id (String): Optional.
 * 
 *  ##### See Also
 * 
 * - Rest api url `people/~/suggestions/job-suggestions:(jobs)
 * - Documentation [link](https://developer.linkedin.com/documents/job-bookmarks-and-suggestions)
 **/
/** section: linked
 *  jobs#add(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - data (Json): Required.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/jobs
 * - Documentation [link](https://developer.linkedin.com/documents/posting-job)
 **/
/** section: linked
 *  jobs#update(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - partner-job-id (String): Optional.
 *  - data (Json): Optional.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/jobs
 * - Documentation [link](https://developer.linkedin.com/documents/editing-job)
 **/
/** section: linked
 *  jobs#remove(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - partner-job-id (String): Optional.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/jobs
 * - Documentation [link](https://developer.linkedin.com/documents/closing-job)
 **/
/** section: linked
 *  jobs#search(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - keywords (String): Optional.
 *  - company-name (String): Optional.
 *  - job-title (String): Optional.
 *  - country-code (String): Optional.
 *  - postal-code (String): Optional.
 *  - distance (String): Optional.
 *  - facet (String): Optional.
 *  - facets (String): Optional.
 *  - start (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - sort (String): Optional.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - Rest api url `/job-search
 * - Documentation [link](https://developer.linkedin.com/documents/job-search-api)
 **/
/** section: linked
 * mixin share
 **/
/** section: linked
 *  share#add(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - data (Json): Required.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/shares
 * - Documentation [link](https://developer.linkedin.com/documents/share-api)
 **/
/** section: linked
 *  share#getNetworksUpdates(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - scope (String): Optional.
 *  - type (String): Optional.
 *  - start (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Validation rule: ` ^[0-9]+$ `.
 *  - after (String): Optional.
 *  - before (String): Optional.
 *  - show-hidden-members (String): Optional.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/network/updates
 * - Documentation [link](https://developer.linkedin.com/documents/get-network-updates-and-statistics-api)
 **/
/** section: linked
 *  share#getNetworksStats(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  No other params, simply pass an empty Object literal `{}`
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/network/network-stats
 * - Documentation [link](https://developer.linkedin.com/documents/get-network-updates-and-statistics-api)
 **/
/** section: linked
 *  share#getNetworksUpdatesComments(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - update-key (String): Optional.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/network/updates/key=:update-key/update-comments
 * - Documentation [link](https://developer.linkedin.com/documents/commenting-reading-comments-and-likes-network-updates)
 **/
/** section: linked
 *  share#getNetworksUpdatesLike(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - update-key (String): Optional.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/network/updates/key=:update-key/likes
 * - Documentation [link](https://developer.linkedin.com/documents/commenting-reading-comments-and-likes-network-updates)
 **/
/** section: linked
 *  share#addShareComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - update-key (String): Optional.
 *  - data (Json): Required.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/network/updates/key=:update-key/update-comments
 * - Documentation [link](https://developer.linkedin.com/documents/commenting-and-liking-company-share)
 **/
/** section: linked
 *  share#likeShareComment(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - update-key (String): Optional.
 *  - data (Json): Required.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/network/updates/key=:update-key/is-liked
 * - Documentation [link](https://developer.linkedin.com/documents/commenting-and-liking-company-share)
 **/
/** section: linked
 *  share#postNetworkUpdate(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - data (Json): Required.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/person-activities
 * - Documentation [link](https://developer.linkedin.com/documents/post-network-update)
 **/
/** section: linked
 * mixin communications
 **/
/** section: linked
 *  communications#sendInvitation(msg, callback) -> null
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - data (Json): Required.
 * 
 *  ##### See Also
 * 
 * - Rest api url `/people/~/mailbox
 * - Documentation [link](https://developer.linkedin.com/documents/invitation-api)
 **/

const html = require('html-template-tag')
const layout = require('./layout')

module.exports = () =>
  layout(html`
    <h3>Add a Page</h3>
    <hr />
    <form method="POST" action="/wiki/">
      <div class="form-group row">
        <label for="authorName" class="col-sm-2 control-label"
          >Author Name</label
        >
        <div class="col-sm-10">
          <input
            id="authorName"
            name="authorName"
            type="text"
            class="form-control"
          />
        </div>
      </div>

      <div class="form-group row">
        <label for="authorEmail" class="col-sm-2 control-label"
          >Author Email</label
        >
        <div class="col-sm-10">
          <input
            id="authorEmail"
            name="authorEmail"
            type="text"
            class="form-control"
            size="30"
          />
        </div>
      </div>

      <div class="form-group row">
        <label for="title" class="col-sm-2 control-label">Page Title</label>
        <div class="col-sm-10">
          <input id="title" name="title" type="text" class="form-control" />
        </div>
      </div>

      <div class="form-group row">
        <label for="pageContent" class="col-sm-2 control-label"
          >Page Content</label
        >
        <div class="col-sm-10">
          <textarea
            id="pageContent"
            name="pageContent"
            rows="5"
            class="form-control"
          ></textarea>
        </div>
      </div>

      <div class="form-check" id="space-add">
        <label class="form-check-label" for="open">Open</label>
        <input
          class="form-check-input"
          type="radio"
          name="status"
          id="open"
          value="open"
        />
      </div>
      <div class="form-check">
        <label class="form-check-label" for="closed">Closed</label>

        <input
          class="form-check-input"
          type="radio"
          name="status"
          id="closed"
          value="closed"
        />
      </div>

      <div class="col-sm-12" id="button-container">
        <button type="submit" class="btn btn-primary btn-lg">submit</button>
      </div>
    </form>
  `)

/*<div>
  <label for="open">Open </label>
  <input type="radio" name="status" id="open" value="open" />
</div>

<div>
  <label for="closed">Closed </label>
  <input type="radio" name="status" id="closed" value="closed" />
</div>*/

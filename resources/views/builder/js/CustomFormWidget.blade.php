<script>
  class CustomFormWidget extends Widget {
    getHtmlId() {
      return "CustomFormWidget";
    }

    init() {
      this.setButtonHtml(`
                    <div class="_1content widget-form">
                      <div class=panel__body title="{{ trans('messages.automation.form') }}">
                        <div class=image-drag>
                          <div ng-bind-html=::getModuleIcon(module) class=ng-binding>
                            <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 82.8 75.4"><g id=Layer_2 data-name="Layer 2"><g id=Layer_1-2 data-name="Layer 1"><rect width=82.8 height=75.44 rx=4.8 style=fill:#f2f2f2 /><rect x=12.7 y=13.2 width=55 height=17.51 rx=8.8 style=fill:#fff /><path d=M52.1,13.2H67.7a0,0,0,0,1,0,0V30.7a0,0,0,0,1,0,0H52.1a8.8,8.8,0,0,1-8.8-8.8v0a8.8,8.8,0,0,1,8.8-8.8Z transform="translate(111.1 43.9) rotate(-180)" style=fill:#dedede /><path d=M56.4,24.5l2-3.1a1,1,0,0,0-.8-1.6H53.5a1,1,0,0,0-.8,1.6l2,3.1A1,1,0,0,0,56.4,24.5Z style=fill:#b7b7b7 /><rect x=12.4 y=45.2 width=55.6 height=17.57 rx=8.8 style=fill:#fff /><rect x=22.8 y=37.8 width=1.8 height=14.95 style=fill:#b7b7b7 /><rect x=17.5 y=35.7 width=12.5 height=2.04 rx=1 style=fill:#b7b7b7 /><rect x=17.5 y=52.7 width=12.5 height=2.04 rx=1 style=fill:#b7b7b7 /></g></g></svg>
                          </div>
                        </div>
                        <div class="body__title body__title--cs ng-binding">{{ trans('messages.automation.form') }}</div>
                      </div>
                    </div>
      `)

      this.setContentHtml(`
                <form builder-element="CustomFormElement" builder-wrapper role="main">
                  <div style="display: flex;align-content: center;justify-content: flex-start">
                    <div>
                      <div builder-element="BlockElement">
                        <div style="padding-top:16px;padding-bottom:16px" class="container">
                          <div builder-element="TextFieldElement" class="form-group">
                            <label builder-element builder-inline-edit for="" class="font-weight-bold">Full name</label>
                            <input name="full_name" type="text" class="form-control" id="IsO872" placeholder="Your name here">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
`);

      this.setDraggingHtml(this.getButtonHtml())
    }
  }
</script>

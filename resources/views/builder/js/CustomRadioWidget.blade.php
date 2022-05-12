<script>
  class CustomRadioWidget extends Widget {
    getHtmlId() {
      return "RadioFieldWidget";
    }

    init() {
      this.setButtonHtml(`
                <div class="_1content widget-text">
                  <div class="panel__body woo-panel__body" title="{{ trans('messages.automation.raiod') }}">
                    <div class="image-drag">
                      <div ng-bind-html="::getModuleIcon(module)" class="ng-binding product-list-widget">
                        <i class="fa fa-dot-circle" style="font-size:28px;display:inline-block"></i>
                      </div>
                    </div>
                    <div class="body__title">{{ trans('messages.automation.radio') }}</div>
                    </div>
                </div>
            `);

      this.setContentHtml(`
                <div builder-element="BlockElement">
                  <div style="padding-top:16px;padding-bottom:16px" class="container">
                    <div builder-element="RadioFieldElement" class="form-group">
                      <label for="exampleFormControlSelect1" class="font-weight-bold">Example select</label>
                      <div class="inputs-group">
                        <span class="mr-4 radio-option">
                          <input type="radio" name="GENDER" value="male" autocomplete="off">
                          <span class="text">Male</span>
                        </span>
                        <span class="mr-4 radio-option">
                          <input type="radio" name="GENDER" value="female" autocomplete="off">
                          <span class="text">Female</span>
                        </span>
                        <span class="mr-4 radio-option">
                          <input type="radio" name="GENDER" value="other" autocomplete="off">
                          <span class="text">Other</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
            `);

      this.setDraggingHtml(this.getButtonHtml());
    }
  }
</script>
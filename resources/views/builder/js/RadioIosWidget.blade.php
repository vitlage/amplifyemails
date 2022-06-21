<script>
  class RadioIosWidget extends Widget {
    getHtmlId() {
      return "RadioIosWidget";
    }

    init() {
      this.setButtonHtml(`
                <div class="_1content widget-text">
                  <div class="panel__body woo-panel__body" title="{{ trans('messages.automation.radio.switch') }}">
                    <div class="image-drag">
                      <div ng-bind-html="::getModuleIcon(module)" class="ng-binding product-list-widget">
                        <img builder-element src="{{ url('images/radio-ios.png') }}" />
                      </div>
                    </div>
                    <div class="body__title">{{ trans('messages.automation.radio.switch') }}</div>
                  </div>
                </div>
            `);

      this.setContentHtml(`
                <div builder-element="BlockElement">
                  <fieldset builder-element="RadioIosFieldElement" class="inputs-group">
                    <label>
                      <input class="cb cb1 field-name" type="checkbox" name="social" checked/>
                      <i></i>
                      <span class="field-label">Social life</span>
                    </label>
                  </fieldset>
                </div>
            `);

      this.setDraggingHtml(this.getButtonHtml());
    }
  }
</script>
<script>
  class RadioSwitcherWidget extends Widget {
    getHtmlId() {
      return "RadioSwitcherWidget";
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
                  <div builder-element="RadioFieldElement" class="form">
                    <div class="inputGroup">
                      <input id="radio1" name="radio" type="radio"/>
                      <label for="radio1">Yes</label>
                    </div>
                    <div class="inputGroup">
                      <input id="radio2" name="radio" type="radio"/>
                      <label for="radio2">No</label>
                    </div>
                   </div>
                </div>
            `);

      this.setDraggingHtml(this.getButtonHtml());
    }
  }
</script>

<script>
  class RadioIosWidget extends Widget {
    getHtmlId() {
      return "RadioIosWidget";
    }

    init() {
      this.setButtonHtml(`
                <div class="_1content widget-text">
                  <div class="panel__body woo-panel__body" title="{{ trans('messages.automation.radio') }}">
                    <div class="image-drag">
                      <div ng-bind-html="::getModuleIcon(module)" class="ng-binding product-list-widget">
                        <img builder-element src="{{ url('images/radio-ios.png') }}" />
                      </div>
                    </div>
                    <div class="body__title">{{ trans('messages.automation.radio') }}</div>
                  </div>
                </div>
            `);

      this.setContentHtml(`
                <div builder-element="BlockElement">
                  <fieldset builder-element="RadioFieldElement" class="inputs-group">
                    <label>
                      <input class="cb cb1" type="checkbox" name="social" onclick="cbChange(this)" checked/>
                      <i></i>
                      <span>Social life</span>
                    </label>
                    <label>
                      <input class="cb cb2" type="checkbox" name="work" onclick="cbChange(this)"/>
                      <i></i>
                      <span>Work</span>
                    </label>
                    <label>
                      <input class="cb cb3" type="checkbox" name="sleep" onclick="cbChange(this)" checked/>
                      <i></i>
                      <span>Sleep</span>
                    </label>
                  </fieldset>
                </div>
            `);

      this.setDraggingHtml(this.getButtonHtml());
    }
  }
</script>
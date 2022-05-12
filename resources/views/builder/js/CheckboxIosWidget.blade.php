<script>
  class CheckboxIosWidget extends Widget {
    getHtmlId() {
      return "CheckboxIosWidget";
    }

    init() {
      this.setButtonHtml(`
                <div class="_1content widget-text">
                  <div class="panel__body woo-panel__body" title="{{ trans('messages.automation.switch') }}">
                    <div class="image-drag">
                      <div ng-bind-html="::getModuleIcon(module)" class="ng-binding product-list-widget">
                        <img builder-element src="{{ url('images/switch.svg') }}" width="100%" />
                      </div>
                    </div>
                    <div class="body__title">{{ trans('messages.automation.switch') }}</div>
                  </div>
                </div>
            `);

      this.setContentHtml(`
                        <div id="`+this.id+`" builder-element="TextFieldElement" class="wrapper">
                          <div class="switch_box">
                            <input type="checkbox" class="switch" name="switch_id">
                          </div>
                        </div>
            `);

      this.setDraggingHtml(this.getButtonHtml());
    }
  }
</script>

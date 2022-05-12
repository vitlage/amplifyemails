<script>
  class CustomCheckboxWidget extends Widget {
    getHtmlId() {
      return "CustomCheckboxWidget";
    }

    init() {
      // default button html
      this.setButtonHtml(`
                <div class="_1content widget-text">
                    <div class="panel__body woo-panel__body" title="{{ trans('messages.automation.checkbox') }}">
                        <div class="image-drag">
                            <div ng-bind-html="::getModuleIcon(module)" class="ng-binding product-list-widget">
                                 <i class="fa fa-check-square" style="font-size:28px;display:inline-block"></i>
                            </div>
                        </div>
                        <div class="body__title">{{ trans('messages.automation.checkbox') }}</div>
                    </div>
                </div>
            `);

      this.setContentHtml(`
                <div id="`+this.id+`" builder-element="TextFieldElement">
                  <input type="checkbox" id="checkbox_id" name="checkbox_id" value="1">
                  <label for="checkbox_id">Some text</label>
                </div>
            `);

      this.setDraggingHtml(this.getButtonHtml());
    }
  }
</script>

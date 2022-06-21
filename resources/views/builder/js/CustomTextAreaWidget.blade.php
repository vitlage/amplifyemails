<script>
    class CustomTextAreaWidget extends TextAreaWidget {
      getHtmlId() {
        return "CustomTextAreaWidget";
      }

      init() {
        this.setButtonHtml(`
                <div class="_1content widget-text-area">
                    <div class=panel__body title={{ trans('messages.textarea_field') }}>
                        <div class=image-drag>
                            <div ng-bind-html="::getModuleIcon(module)" class=ng-binding>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83 83"><g id=Layer_2 data-name="Layer 2"><g id=Layer_1-2 data-name="Layer 1"><rect width=83 height=83.02 rx=7.3 style=fill:#e2e2e2 /><rect x=21.3 y=17.8 width=2.8 height=26.45 style=fill:#b7b7b7 /><rect x=12.8 y=14.2 width=19.8 height=3.61 rx=1.2 style=fill:#b7b7b7 /><rect x=12.8 y=44.3 width=19.8 height=3.61 rx=1.2 style=fill:#b7b7b7 /><rect x=42.6 y=18.2 width=35.6 height=2.55 style=fill:#fff /><rect x=42.6 y=27.1 width=35.6 height=2.55 style=fill:#fff /><rect x=7 y=71.4 width=57.9 height=2.55 style=fill:#fff /><rect x=42.6 y=36 width=35.6 height=2.55 style=fill:#fff /><rect x=42.6 y=44.8 width=35.6 height=2.55 style=fill:#fff /><rect x=7 y=53.7 width=71.2 height=2.55 style=fill:#fff /><rect x=7 y=62.5 width=71.2 height=2.55 style=fill:#fff /></g></g></svg>
                            </div>
                        </div>
                        <div class="body__title body__title--cs ng-binding">{{ trans('messages.textarea_field') }}</div>
                    </div>
                </div>
            `);

        this.setContentHtml(`
            <div class=text-area-container f-role="">
                <div class=text-area>
                    <textarea class=form-control style="border: 1px solid rgba(66, 83, 112, 0.3);box-sizing: border-box;border-radius: 30px;text-indent: 10px;" rows=3 cols=50></textarea>
                </div>
            </div>
      `);

        this.setDraggingHtml(this.getButtonHtml());
      }
    }
</script>
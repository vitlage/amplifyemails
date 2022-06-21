<script>
  class RoundedInputWidget extends CustomInputWidget {
    getHtmlId () {
      return 'RoundedInputFieldWidget'
    }

    getButtonHtml () {
      return `<div class="_1content widget-input-group">
               <div class=panel__body title="{{ trans('messages.automation.input.round') }}">
                 <div class=image-drag>
                   <div ng-bind-html="::getModuleIcon(module)" class=ng-binding>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89.6 72.4"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect y="41.3" width="87.9" height="31.08" rx="19.1" style="fill:#cecece"></rect><rect x="16.4" y="28.1" width="2.8" height="26.45" style="fill:#b7b7b7"></rect><rect x="7.9" y="24.5" width="19.8" height="3.61" rx="1.2" style="fill:#b7b7b7"></rect><rect x="7.9" y="54.6" width="19.8" height="3.61" rx="1.2" style="fill:#b7b7b7"></rect><rect width="89.6" height="2.55" style="fill:#e2e2e2"></rect><rect y="7.6" width="89.6" height="2.55" style="fill:#e2e2e2"></rect><rect y="14.4" width="72.9" height="2.55" style="fill:#e2e2e2"></rect></g></g></svg>
                   </div>
                 </div>
                 <div class="body__title body__title--cs ng-binding">{{ trans('messages.automation.input.round') }}</div>
               </div>
              </div>`
    }
  }
</script>
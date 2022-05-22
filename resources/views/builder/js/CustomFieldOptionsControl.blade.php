<script>
    class CustomFieldOptionsControl extends FieldOptionsControl {
      getRowHtml(value, text) {
        return '<div class="field-option">' +
                '<div class="row">\n' +
                '  <div class="col-md-5 d-flex align-items-center pr-1">\n' +
                '    <label class="small m-0">' + getI18n("field.option.value") + '</label>\n' +
                '    <input class="small m-0" type="text" name="value" value="' + value + '" />\n' +
                '  </div>\n' +
                '  <div class="col-md-7 d-flex align-items-center pl-1">\n' +
                '    <label class="small m-0">' + getI18n("field.option.text") + '</label>\n' +
                '    <input class="" type="text" name="text" value="' + text + '" />\n' +
                '  </div>\n' +
                '</div>\n' +
              '</div>'
      }

      renderHtml() {
        var e = $("#FieldOptionsControl").html();
        this.selector = ".control-" + this.id, e = e.replace("[ID]", this.id);
        var t = "";
        var self = this;
        self.value.options.push({value: '', text: ''})
        return self.value.options.forEach(
          (function (e) {
            t += self.getRowHtml(e.value, e.text);
          })),
          e = e.replace("[OPTIONS]", t),
          e += '<div class=btn-group>\n' +
          '    <button class="btn hide-all desktop" data-toggle=tooltip data-placement=top title=Add id=add-radio-item>{language.wpanel.others.add.title}</button>\n' +
          '    <button class="btn hide-all mobile" data-toggle=tooltip data-placement=top title=Delete id=delete-radio-item>{language.wpanel.others.delete.title}</button>\n' +
          '</div>', $("<DIV>").html(e).html()
      }

      update() {
        this.callback({
          options: $(this.selector)
            .find(".field-option")
            .filter(function () {
              return $(this).find("[name=value]").val().trim() !== ''
            })
            .map((function () {
              return {
                value: $(this).find("[name=value]").val().trim(),
                text: $(this).find("[name=text]").val().trim(),
                checked: $(this).find("[name=checkbox]").is(":checked")
              }
          })).get()
        })
      }

      afterRender() {
        var e = this;
        $(e.selector).find("input").on("change keyup", (function () {
          e.update()
        }))
        $('#add-radio-item').click(function () {
          var elements = $(e.selector).find('.field-option');
          var lastRow = elements[elements.length - 1].children[0];
          for (var i = 0; i < lastRow.children.length; i++) {
            var tableChild = lastRow.children[i];
            if ($(tableChild).find('input[type=text]').val() === '') {
              return;
            }
          }
          $(e.selector).children().append(e.getRowHtml('', ''));
          $(e.selector).find("input").on("change keyup", (function () {
            e.update();
          }))
        })
        $('#delete-radio-item').click(function () {
          var elements = $(e.selector).find('.field-option');
          if (elements.length <= 2) {
            return;
          }
          var lastRow = elements[elements.length - 2];
          lastRow.remove();
          e.update();
        })
      }
    }
</script>
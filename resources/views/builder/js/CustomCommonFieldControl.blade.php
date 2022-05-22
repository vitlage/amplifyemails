<script>
  class CustomCommonFieldControl extends CommonFieldControl {
    renderHtml() {
      var e = $("#CommonFieldControl").html();
      return this.selector = ".control-" + this.id, e = (e = (e = (e = (e = (e = e.replace("[ID]", this.id)).replace("[TITLE]", this.title)).replace("[FIELD_ID]", this.value.id)).replace(/\[FIELD_NAME\]/g, this.value.fieldName).replace(/disabled="disabled"/g, "")).replace(/\[ICON\]/g, this.value.icon)).replace("[LABEL]", this.value.label), $("<DIV>").html(e).html()
    }
  }
</script>

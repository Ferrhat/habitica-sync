import { __awaiter } from "tslib";
import { PluginSettingTab, Setting } from "obsidian";
export class ExampleSettingsTab extends PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    display() {
        let { containerEl } = this;
        containerEl.empty();
        new Setting(containerEl)
            .setName("Date format")
            .setDesc("Default date format")
            .addText((text) => text
            .setPlaceholder("MMMM dd, yyyy")
            .setValue(this.plugin.settings.dateFormat)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.dateFormat = value;
            yield this.plugin.saveSettings();
        })));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFPLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUUxRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsZ0JBQWdCO0lBR3BELFlBQVksR0FBUSxFQUFFLE1BQXFCO1FBQ3ZDLEtBQUssQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7SUFDeEIsQ0FBQztJQUVELE9BQU87UUFDSCxJQUFJLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzNCLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVwQixJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUM7YUFDbkIsT0FBTyxDQUFDLGFBQWEsQ0FBQzthQUN0QixPQUFPLENBQUMscUJBQXFCLENBQUM7YUFDOUIsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FFZCxJQUFJO2FBQ0MsY0FBYyxDQUFDLGVBQWUsQ0FBQzthQUMvQixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO2FBQ3pDLFFBQVEsQ0FBQyxDQUFPLEtBQUssRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3JDLENBQUMsQ0FBQSxDQUFDLENBQ1QsQ0FBQztJQUNWLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGFtcGxlUGx1Z2luIGZyb20gXCJtYWluXCI7XHJcbmltcG9ydCB7IEFwcCwgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZyB9IGZyb20gXCJvYnNpZGlhblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4YW1wbGVTZXR0aW5nc1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xyXG4gICAgcGx1Z2luOiBFeGFtcGxlUGx1Z2luO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IEV4YW1wbGVQbHVnaW4pIHtcclxuICAgICAgICBzdXBlcihhcHAsIHBsdWdpbilcclxuICAgICAgICB0aGlzLnBsdWdpbiA9IHBsdWdpblxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXkoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XHJcbiAgICAgICAgY29udGFpbmVyRWwuZW1wdHkoKTtcclxuICAgICAgICBcclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgLnNldE5hbWUoXCJEYXRlIGZvcm1hdFwiKVxyXG4gICAgICAgICAgICAuc2V0RGVzYyhcIkRlZmF1bHQgZGF0ZSBmb3JtYXRcIilcclxuICAgICAgICAgICAgLmFkZFRleHQoKHRleHQpID0+IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoXCJNTU1NIGRkLCB5eXl5XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmRhdGVGb3JtYXQpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5kYXRlRm9ybWF0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbn0iXX0=
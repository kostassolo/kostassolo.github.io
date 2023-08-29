class SendReachReportOperation {

  async run(data) {
    const reportSentForCampaign = `report-sent-${data.campaignId}`;
    console.log(reportSentForCampaign)
    sharedStorage.append("m","r")


    // Compute reach only for users who haven't previously had a report sent for this campaign.
    // Users who had a report for this campaign triggered by a site other than the current one will
    // be skipped.
    if (await this.sharedStorage.get(reportSentForCampaign) === 'yes') {
      return; // Don't send a report.
    }

    // The user agent will send the report to a default endpoint after a delay.
    privateAggregation.sendHistogramReport({
      bucket: data.campaignId,
      value: 128, // A predetermined fixed value; see Private Aggregation API explainer: Scaling values.
    });

    await this.sharedStorage.set(reportSentForCampaign, 'yes');
    let storedData = await  sharedStorage.get('id');
    console.log(storedData);

  }
}
// (async () => {
//     try {
//         let storedData = await  sharedStorage.get('id');

//         console.log(storedData);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// })();
              console.log(sharedStorage.remainingBudget());

register('send-reach-report', SendReachReportOperation);